import GuitarType, { InvalidTypeException } from './guitar-type'

describe('guitar should', () => {
  it('be created with electric value and default values when "Guitar.create" method is called', () => {
    // Act
    const guitar = GuitarType.create(GuitarType.list.electric)
    // Assert
    expect(guitar.value).toBe('electric')
  })
  it('"fromString" should thwow an error when value is a invalid type', () => {
    // Assert
    expect(() => GuitarType.fromString('spanish')).toThrow(InvalidTypeException)
  })
  it('"fromString" should create a GuitarType when value is ok', () => {
    // Act
    const guitar = GuitarType.fromString('electric')
    // Assert
    expect(guitar.value).toBe('electric')
  })
})
