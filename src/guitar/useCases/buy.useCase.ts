// funcion que permita recibir una guitarra

import { UseCase } from '../../shared/domain/useCase'
import { NotificationService } from '../../shared/infrastructure/notificationService'
import Guitar from '../domain/guitar/guitar'
import { GuitarRepository } from '../infrastructure/guitarHttpRepository'

export default class BuyUseCase implements UseCase<void> {
  constructor(
    private guitarRepository: GuitarRepository,
    private notificationService: NotificationService
  ) {}

  async execute(guitar: Guitar): Promise<void> {
    try {
      await this.guitarRepository.send(guitar)
      this.notificationService.success('success')
    } catch (error) {
      this.notificationService.error('error')
    }
  }
}
