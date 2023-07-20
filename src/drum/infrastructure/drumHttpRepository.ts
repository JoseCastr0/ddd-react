import Drum from '../domain/drum'

export abstract class DrumRepository {
  abstract send(drum: Drum): Promise<void>
  abstract getList(): Promise<Drum[]>
}

export class DrumHttpRepository implements DrumRepository {
  async getList(): Promise<Drum[]> {
    return [
      Drum.create({
        colorDrum: 'purple',
        type: 'acoustic',
        engraving: 'Fake engraving'
      })
    ]
  }
  async send(drum: Drum): Promise<void> {
    // post
  }
}

export class DrumFakeRepository implements DrumRepository {
  async getList(): Promise<Drum[]> {
    return [
      Drum.create({
        colorDrum: 'white',
        type: 'electric',
        engraving: 'Mi grabado'
      })
    ]
  }
  async send(drum: Drum): Promise<void> {
    // post
  }
}
