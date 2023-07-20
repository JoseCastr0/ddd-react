import Drum from './drum'

describe('Drum', () => {
  it('should create a drum with the values passed when "created" methods is called', () => {
    const fixture = {
      color: 'red',
      type: 'acoustic',
      brand: 'Yamaha'
    }
    const drum = Drum.create(fixture)
    expect(drum).toEqual(fixture)
  })
})
