import InvalidColorException from '../../shared/domain/invalid-color'

enum Colors {
  white = 'white',
  red = 'red',
  black = 'black',
  pink = 'pink'
}

export default class DrumColor {
  private constructor(public readonly value: string) {}

  static list = Colors

  static create(value: Colors): DrumColor {
    return new DrumColor(value)
  }

  static fromString(value: string): DrumColor {
    if (!Object.keys(Colors).includes(value)) throw new InvalidColorException()
    return new DrumColor(Colors[value as keyof typeof Colors])
  }
}
