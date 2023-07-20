import { Exception } from '../../../shared/domain/exception'

enum types {
  acoustic = 'acoustic',
  electric = 'electric'
}

// enum AcousticShapes {
//   parlor = 'parlor',
//   jumbo = 'jumbo'
// }

// enum AcousticShapes {
//   FenderStratocaster = 'S-Type',
//   FenderTelecaster = 'T-Type',
//   GibsonLesPaul = 'LP-Type',
//   GibsonSG = 'SG-Type',
//   GibsonExplorer = 'Explorer Type',
//   GibsonFlyingV = 'V-Type',
//   Offset = 'Offset-Type'
// }

export default class GuitarType {
  static list = types

  private constructor(public readonly value: types) {}

  static create(value: types): GuitarType {
    return new GuitarType(value)
  }

  static fromString(value: string): GuitarType {
    if (!Object.keys(types).includes(value)) throw new InvalidTypeException()
    return new GuitarType(types[value as keyof typeof types])
  }
}

export class InvalidTypeException extends Exception {
  constructor() {
    super('Invalid Drum Type')
  }
}
