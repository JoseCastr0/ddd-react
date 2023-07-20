import InvalidColorException from '../../../shared/domain/invalid-color'

export enum Color {
  white = 'white',
  red = 'red',
  blue = 'blue',
  pink = 'pink',
  black = 'black'
}

export default class GuitarColor {
  static list = Color

  static isEditable(color: string): boolean {
    return color === Color.white
  }

  private constructor(public readonly value: string) {}

  static create(value: Color): GuitarColor {
    return new GuitarColor(value)
  }

  static fromString(value: string): GuitarColor {
    if (!Object.keys(Color).includes(value)) throw new InvalidColorException()
    return new GuitarColor(Color[value as keyof typeof Color])
  }
}
