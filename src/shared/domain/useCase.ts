export abstract class UseCase<T> {
  abstract execute(props?: unknown): Promise<T>
}
