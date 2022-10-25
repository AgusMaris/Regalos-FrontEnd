import { useEffect, useState } from 'react'
import { delay } from '../../../utils/functions'
import { AsyncState } from '../../../utils/types'
import Gifts from '../../../Api/MockedGifts.json'
const giftsData = Gifts.data

export default function useGifts() {
  const [gifts, setGifts] = useState<AsyncState<typeof giftsData>>({
    isLoading: false,
    data: [],
    error: null,
  })

  const getGifts = async () => {
    setGifts({ data: [], isLoading: true, error: null })
    await delay(2000)
    setGifts({ data: giftsData, isLoading: false, error: null })
  }

  useEffect(() => {
    getGifts()
  }, [])

  return { gifts, getGifts }
}
