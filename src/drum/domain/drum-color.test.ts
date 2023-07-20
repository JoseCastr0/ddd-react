import DrumColor from './drum-color'
import InvalidColorException from '../../shared/domain/invalid-color'

describe('DrumColor should', () => {
  it('create an instance of a valid color in the list when "DrumColor.create" method is called', () => {
    const drumColor = DrumColor.create(DrumColor.list.pink)
    expect(drumColor.value).toBe('pink')
  })
  it('"fromString" should thwow an error when value is a invalid type', () => {
    expect(() => DrumColor.fromString('purple')).toThrowError(
      InvalidColorException
    )
  })
  it('"fromString" should create a DrumColor when value is ok', () => {
    const drum = DrumColor.fromString('red')
    expect(drum.value).toBe('red')
  })
})
