import { Exception } from '../../../shared/domain/exception'

export default class GuitarEngraving {
  private constructor(public readonly value: string) {}

  static create(value: string): GuitarEngraving {
    GuitarEngraving.validate(value)
    return new GuitarEngraving(value)
  }

  static validate(value: string): boolean {
    if (value.length === 0) throw new EmptyException()
    if (value.length > 30) throw new InvalidLengthException()
    return true
  }
}

export class InvalidLengthException extends Exception {
  constructor() {
    super('Invalid Length')
  }
}

export class EmptyException extends Exception {
  constructor() {
    super('Empty Exception')
  }
}
