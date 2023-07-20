import InvalidBrandException from '../../shared/domain/invalid-brand'
import DrumBrand from './drum-brand'

describe('DrumBrand should', () => {
  it('create an instance of a valid brand in the list when "DrumBrand.create" method is called', () => {
    const drumBrand = DrumBrand.create(DrumBrand.list.pearl)
    expect(drumBrand.value).toBe('pearl')
  })
  it('"create" should thwow an error when value is a invalid type', () => {
    expect(() => DrumBrand.fromString('sonor')).toThrow(InvalidBrandException)
  })
})
