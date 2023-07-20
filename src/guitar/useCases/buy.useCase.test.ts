import {
  instance,
  mock,
  reset,
  when,
  verify,
  anything,
  anyString
} from 'ts-mockito'
import BuyUseCase from './buy.useCase'
import Guitar from '../domain/guitar/guitar'
import { GuitarRepository } from '../infrastructure/guitarHttpRepository'
import { NotificationService } from '../../shared/infrastructure/notificationService'

const guitarRepositoryMock = mock<GuitarRepository>()
const notificationServiceMock = mock<NotificationService>()

const guitarFixture = Guitar.fromJSON({
  colorGuitar: 'white',
  type: 'electric',
  engraving: 'Mi grabado'
})

describe('buy UseCase should', () => {
  let sut: BuyUseCase
  let guitarRepository: GuitarRepository
  let notificationService: NotificationService
  afterEach(() => {
    reset(guitarRepositoryMock)
    reset(notificationServiceMock)
  })
  beforeEach(() => {
    guitarRepository = instance(guitarRepositoryMock)
    notificationService = instance(notificationServiceMock)
    sut = new BuyUseCase(guitarRepository, notificationService)
  })
  it('should success', async () => {
    when(guitarRepositoryMock.send(anything())).thenResolve()
    await sut.execute(guitarFixture)
    verify(notificationServiceMock.success(anyString())).called()
  })
  it('should error', async () => {
    when(guitarRepositoryMock.send(anything())).thenReject()
    await sut.execute(guitarFixture)
    verify(notificationServiceMock.error(anyString())).called()
  })
})
