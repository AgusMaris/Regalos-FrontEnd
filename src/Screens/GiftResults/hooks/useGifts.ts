import { useEffect, useState } from 'react'
import { delay } from '../../../utils/functions'
import { AsyncState } from '../../../utils/types'
import Gifts from '../../../Api/MockedGifts.json'
import Api from '../../../Api'
const giftsData = Gifts.data

export default function useGifts(score: { [tag: string]: number }) {
  const [gifts, setGifts] = useState<AsyncState<typeof giftsData>>({
    isLoading: false,
    data: [],
    error: null,
  })

  const getGifts = async () => {
    setGifts({ data: [], isLoading: true, error: null })
    Api.Gifts.getGifts('123', score).then((gifts) => {
      if (gifts) {
        console.log(gifts)
        setGifts({
          isLoading: false,
          data: gifts,
          error: null,
        })
      }
    })
  }

  useEffect(() => {
    getGifts()
  }, [])

  return { gifts, getGifts }
}
