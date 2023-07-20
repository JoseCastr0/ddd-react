import { anyString, instance, mock, reset, verify, when } from 'ts-mockito'
import GuitarHttpRepositoryException, {
  GuitarHttpRepository
} from '../infrastructure/guitarHttpRepository'

import { HttpService } from '../../shared/infrastructure/httpService'
import Guitar from '../domain/guitar/guitar'
import InvalidColorException from '../../shared/domain/invalid-color'

const httpServiceMock = mock<HttpService>()
const guitarJson = {
  colorGuitar: 'white',
  type: 'electric',
  engraving: 'Mi grabado'
}

const guitar = Guitar.fromJSON(guitarJson)

describe('guitarHttpRepository', () => {
  let sut: GuitarHttpRepository
  let httpService: HttpService

  beforeEach(() => {
    httpService = instance(httpServiceMock)
    sut = new GuitarHttpRepository(httpService)
  })
  afterEach(() => {
    reset(httpServiceMock)
  })
  it('should success propertly', async () => {
    when(httpServiceMock.get(anyString())).thenResolve([guitarJson])
    const response = await sut.getList()
    verify(httpServiceMock.get('http://localhost:3000/guitars')).called()
    expect(response.length).toBe(1)
    expect(response[0]).toEqual(guitar)
  })
  // se pueden hacer diferentes test en base al tipo de error que estará controlado en el repository
  it('when get reject should throw error', async () => {
    when(httpServiceMock.get(anyString())).thenReject()
    await expect(() => sut.getList()).rejects.toThrowError()
  })
  it('should fail when get an invalid guitar', async () => {
    const mockGuitar = {
      colorGuitar: 'invalid'
    }
    when(httpServiceMock.get(anyString())).thenResolve([mockGuitar])

    await expect(() => sut.getList()).rejects.toEqual(
      new InvalidColorException()
    )
  })
})
