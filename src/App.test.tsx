const fizzBuzz = (n: number): number | string => {
  const divisibleBy = (divider: number, n: number) => n % divider === 0

  if (divisibleBy(15, n)) return 'FizzBuzz'
  if (divisibleBy(5, n)) return 'Buzz'
  if (divisibleBy(3, n)) return 'Fizz'

  return n
}

describe('FizzBuzz', () => {
  test('should return one if receive one', () => {
    const expected = 1
    const result = fizzBuzz(1)
    expect(result).toBe(expected)
  })

  test('should return Fizz if receive three', () => {
    const expected = 'Fizz'
    const result = fizzBuzz(3)
    expect(result).toBe(expected)
  })

  test('should return Buzz if receive five', () => {
    const expected = 'Buzz'
    const result = fizzBuzz(5)
    expect(result).toBe(expected)
  })

  test('should return FizzBuzz if receive 15', () => {
    const expected = 'FizzBuzz'
    const result = fizzBuzz(15)
    expect(result).toBe(expected)
  })

  test('should return Fizz if receive any number divisible by 3', () => {
    const expected = 'Fizz'
    const result = fizzBuzz(9)
    expect(result).toBe(expected)
  })

  test('should return Buzz if receive any number divisible by 5', () => {
    const expected = 'Buzz'
    const result = fizzBuzz(25)
    expect(result).toBe(expected)
  })

  test('should return FizzBuzz if receive any number is divisible by 15', () => {
    const expected = 'FizzBuzz'
    const result = fizzBuzz(30)
    expect(result).toBe(expected)
  })

  test('should return the same number that recieves', () => {
    const expected = 4
    const result = fizzBuzz(4)
    expect(result).toBe(expected)
  })
})
