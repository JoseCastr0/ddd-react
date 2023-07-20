import GuitarColor from './guitar-color'
import GuitarEngraving from './guitar-engraving'
import GuitarType from './guitar-type'

export default class Guitar {
  private constructor(
    public readonly color: GuitarColor,
    public readonly type: GuitarType,
    public readonly engraving: GuitarEngraving
  ) {}

  static fromJSON(json: any): Guitar {
    return new Guitar(
      GuitarColor.fromString(json.colorGuitar),
      GuitarType.fromString(json.type),
      GuitarEngraving.create(json.engraving)
    )
  }

  toJSON() {
    return {
      colorGuitar: this.color.value,
      type: this.type.value,
      engraving: this.engraving.value
    }
  }
}
