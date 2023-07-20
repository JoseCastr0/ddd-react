import { UseCase } from '../../shared/domain/useCase'
import Drum from '../domain/drum'
import InvalidColorException from '../../shared/domain/invalid-color'
import InvalidBrandException from '../../shared/domain/invalid-brand'
import {
  DrumFakeRepository,
  DrumRepository
} from '../infrastructure/drumHttpRepository'
import {
  NotificationFakeService,
  NotificationService
} from '../../shared/infrastructure/notificationService'

export class GetListUseCase implements UseCase<Drum[]> {
  constructor(
    private drumRepository: DrumRepository,
    private notificationService: NotificationService
  ) {}

  async execute(): Promise<Drum[]> {
    try {
      const data = await this.drumRepository.getList()
      this.notificationService.success('success')
      return data
    } catch (error) {
      if (error instanceof InvalidBrandException) {
        this.notificationService.error(error.message)
      }
      if (error instanceof InvalidColorException) {
        this.notificationService.error(error.message)
      }
      //   console.log('error ...>', error)
      this.notificationService.error('unknown error')
    }
    return []
  }
}
