import GuitarEngraving, {
  EmptyException,
  InvalidLengthException
} from './guitar-engraving'

describe('guitar should', () => {
  it('be created with electric value and default values when "Guitar.create" method is called', () => {
    const guitar = GuitarEngraving.create('Mi grabado')

    expect(guitar.value).toBe('Mi grabado')
  })
  it('"fromString" should thwow an error when value is a invalid type', () => {
    expect(() => GuitarEngraving.create('')).toThrow(EmptyException)
  })
  it('"fromString" should create a GuitarEngraving when value is ok', () => {
    expect(() =>
      GuitarEngraving.create(
        'Lorem  ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos?'
      )
    ).toThrow(InvalidLengthException)
  })
})
