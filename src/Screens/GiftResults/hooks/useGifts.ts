import { useEffect, useState } from 'react'
import { delay } from '../../../utils/functions'
import { AsyncState } from '../../../utils/types'
import Gifts from '../../../Api/MockedGifts.json'
import Api from '../../../Api'
import { ListItemText } from '@material-ui/core'
const giftsData = Gifts.data

export default function useGifts(score: { [tag: string]: number }) {
  const [gifts, setGifts] = useState<AsyncState<typeof giftsData>>({

    isLoading: false,
    data: [],
    error: null,
  })
  const [limit, setLimit] = useState(3)

       
        
  const cambiarLimite = () => {setLimit(limit + 3)}

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
  const arrayLimitado = gifts.data.slice(0, limit)

  return { gifts:{isLoading:gifts.isLoading,error:gifts.error,data:arrayLimitado}, getGifts, cambiarLimite }
}
