import { UseCase } from '../../shared/domain/useCase'
import Guitar from '../domain/guitar/guitar'
import InvalidColorException from '../../shared/domain/invalid-color'
import { InvalidTypeException } from '../domain/guitar/guitar-type'
import {
  GuitarFakeRepository,
  GuitarHttpRepository,
  GuitarRepository
} from '../infrastructure/guitarHttpRepository'
import {
  NotificationFakeService,
  NotificationService
} from '../../shared/infrastructure/notificationService'

export class GetListUseCase implements UseCase<Guitar[]> {
  static execute: any
  constructor(
    private guitarRepository: GuitarRepository = new GuitarHttpRepository(),
    private notificationService: NotificationService = new NotificationFakeService()
  ) {}

  async execute(): Promise<Guitar[]> {
    try {
      const data = await this.guitarRepository.getList()
      this.notificationService.success('success')
      return data
    } catch (error) {
      if (error instanceof InvalidTypeException) {
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
