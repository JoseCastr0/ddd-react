import { anyString, instance, mock, reset, verify, when } from 'ts-mockito'
import {
  GuitarFakeRepository,
  GuitarHttpRepository,
  GuitarRepository
} from '../infrastructure/guitarHttpRepository'
import { GetListUseCase } from './getList.useCase'
import {
  NotificationFakeService,
  NotificationService
} from '../../shared/infrastructure/notificationService'

const guitarRepositoryMock = mock<GuitarRepository>()
const notificationServiceMock = mock<NotificationService>()

describe('getList useCase', () => {
  let sut: GetListUseCase
  let guitarRepository: GuitarRepository
  let notificationService: NotificationService
  beforeEach(() => {
    guitarRepository = instance(guitarRepositoryMock)
    notificationService = instance(notificationServiceMock)
    sut = new GetListUseCase(guitarRepository, notificationService)
  })
  afterEach(() => {
    reset(guitarRepositoryMock)
    reset(notificationServiceMock)
  })
  it('should success propertly', async () => {
    when(guitarRepositoryMock.getList()).thenResolve()
    await sut.execute()
    verify(notificationServiceMock.success(anyString())).called()
  })
  it('should error propertly', async () => {
    when(guitarRepositoryMock.getList()).thenReject()
    await sut.execute()
    verify(notificationServiceMock.error(anyString())).called()
    const a = new GetListUseCase(
      new GuitarHttpRepository(),
      new NotificationFakeService()
    )
    const result = await a.execute()
    console.log('result ...>', result)
  })
})
