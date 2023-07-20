// import React from 'react';
// import { render, screen } from "@testing-library/react";
import GuitarColor from './guitar-color'
import InvalidColorException from '../../../shared/domain/invalid-color'

describe('guitar should', () => {
  it('be created with electric value and default values when "Guitar.create" method is called', () => {
    const guitar = GuitarColor.create(GuitarColor.list.white)
    expect(guitar.value).toBe('white')
  })
  it('"fromString" should thwow an error when value is a invalid type', () => {
    expect(() => GuitarColor.fromString('purple')).toThrowError(
      InvalidColorException
    )
  })
  it('"fromString" should create a GuitarColor when value is ok', () => {
    const guitar = GuitarColor.fromString('red')
    expect(guitar.value).toBe('red')
  })
})
