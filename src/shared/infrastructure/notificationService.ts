export abstract class NotificationService {
  abstract success(message: string): void
  abstract error(message: string): void
}

export class NotificationFakeService implements NotificationService {
  success(message: string): void {
    console.log(message)
  }
  error(message: string): void {
    console.log(message)
  }
}
