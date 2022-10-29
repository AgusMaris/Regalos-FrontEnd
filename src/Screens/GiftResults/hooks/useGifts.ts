import { useEffect, useState } from 'react'
import { delay } from '../../../utils/functions'
import { AsyncState } from '../../../utils/types'
import Gifts from '../../../Api/MockedGifts.json'
import Api from '../../../Api'
import { useAuth } from '../../../Components/Providers/AuthProvider'
const giftsData = Gifts.data

export default function useGifts(score: { [tag: string]: number }) {
  const [gifts, setGifts] = useState<AsyncState<typeof giftsData>>({
    isLoading: false,
    data: [],
    error: null,
  })
  const { user } = useAuth()

  const getRandomGift = async ()=>{
     Api.Gifts.getRandomGift().then((gift) => {
      if (gift) {
      setGifts({
        isLoading: false,
        data: gift,
        error: null,
      }) }
  })
  }

  const getGifts = async () => {
    console.log("tamos aca")
    setGifts({ data: [], isLoading: true, error: null })
    Api.Gifts.getGifts(user!.id, score).then((gifts) => {
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
    console.log("EL SCORE DE USE EFFECT ES: " +Object.entries(score).length)
    Object.entries(score).length != 0 ? getGifts() : getRandomGift()
  }, [])

  return { gifts, getGifts }
}
