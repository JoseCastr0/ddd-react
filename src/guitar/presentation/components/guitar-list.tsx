import React, { useState } from 'react'
import { GetListUseCase } from '../../useCases/getList.useCase'
import GuitarColor, { Color } from '../../domain/guitar/guitar-color'
import { useGetData } from '../../../shared/presentation/hooks'

function GuitarList() {
  const [color, setColor] = useState<Color>(Color.black)
  const {
    data: guitars,
    loading,
    error,
    getData
  } = useGetData(new GetListUseCase())

  return (
    <div>
      {guitars.map((guitar) => (
        <div key={guitar.color.value}>{guitar.color.value}</div>
      ))}
      <select
        name=""
        id=""
        value={color}
        onChange={(e) => {
          setColor(e.target.value as Color)
        }}
      >
        {Object.keys(GuitarColor.list).map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <input type="text" disabled={GuitarColor.isEditable(color)} />
    </div>
  )
}

export default GuitarList
