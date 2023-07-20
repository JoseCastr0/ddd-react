import { useEffect, useState } from 'react'
import Guitar from '../../guitar/domain/guitar/guitar'
import { UseCase } from '../domain/useCase'

export const useGetData = (useCase: UseCase<any>) => {
  const [data, setData] = useState<Guitar[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const getData = async () => {
    setLoading(true)
    try {
      const response = await useCase.execute()
      setData(response)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return { data, loading, error, getData }
}
