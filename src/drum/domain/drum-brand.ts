import InvalidBrandException from '../../shared/domain/invalid-brand'

enum Brands {
  pearl = 'pearl',
  yamaha = 'yamaha',
  mapex = 'mapex',
  tama = 'tama'
}

export default class DrumBrand {
  private constructor(public readonly value: string) {}

  static list = Brands

  static create(value: Brands): DrumBrand {
    return new DrumBrand(value)
  }

  static fromString(value: string): DrumBrand {
    if (!Object.keys(Brands).includes(value)) throw new InvalidBrandException()
    return new DrumBrand(Brands[value as keyof typeof Brands])
  }
}
