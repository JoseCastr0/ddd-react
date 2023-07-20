import { anyString, instance, mock, reset, verify, when } from 'ts-mockito'
import {
  DrumHttpRepository,
  DrumRepository
} from '../infrastructure/drumHttpRepository'
import { GetListUseCase } from './getList.useCase'
import {
  NotificationFakeService,
  NotificationService
} from '../../shared/infrastructure/notificationService'

const drumRepositoryMock = mock<DrumRepository>()
const notificationServiceMock = mock<NotificationService>()

describe('getList useCase', () => {
  let sut: GetListUseCase
  let guitarRepository: DrumRepository
  let notificationService: NotificationService
  beforeEach(() => {
    guitarRepository = instance(drumRepositoryMock)
    notificationService = instance(notificationServiceMock)
    sut = new GetListUseCase(guitarRepository, notificationService)
  })
  afterEach(() => {
    reset(drumRepositoryMock)
    reset(notificationServiceMock)
  })
  it('should call "success" method of notificationService when call is resolved"', async () => {
    when(drumRepositoryMock.getList()).thenResolve()
    await sut.execute()
    verify(notificationServiceMock.success(anyString())).called()
  })
  it('should call "error" method of notificationService when call is rejected', async () => {
    when(drumRepositoryMock.getList()).thenReject()
    await sut.execute()
    verify(notificationServiceMock.error(anyString())).called()
    const a = new GetListUseCase(
      new DrumHttpRepository(),
      new NotificationFakeService()
    )
    const result = await a.execute()
    console.log('drum result ...>', result)
  })
})
