import Guitar from './guitar'

describe('guitar should', () => {
  it('"toJSON" ', () => {
    const fixture = {
      colorGuitar: 'white',
      type: 'electric',
      engraving: 'Mi grabado'
    }
    const guitar = Guitar.fromJSON(fixture)
    expect(guitar.toJSON()).toEqual(fixture)
  })
})
