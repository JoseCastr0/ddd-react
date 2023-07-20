import DrumColor from './drum-color'

export default class Drum {
  private constructor(
    private readonly color: DrumColor,
    private readonly type: string,
    private readonly brand: string
  ) {}

  static create(jason: any): Drum {
    return new Drum(jason.color, jason.type, jason.brand)
  }
}
