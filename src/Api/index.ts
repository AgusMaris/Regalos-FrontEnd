import axios from 'axios'
import { GiftSchema } from '../schemas/Gift'
import { Question } from '../schemas/Question'
import { delay } from '../utils/functions'
import MockedGifts from './MockedGifts.json'

const gifts = MockedGifts.data

const URLS = {
  local: 'http://192.168.0.10:3000',
  prod: 'https://regalos-backend-production.up.railway.app/',
}

const API_URL = URLS.prod

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const claimedUserIds: Record<string, string[]> = {}

const Api = {
  Gifts: {
    getMysteriousBoxGift: async (
      score: { [tag: string]: number },
      userId: string
    ): Promise<typeof gifts[number]> => {
      const res = await apiClient.post('/mysteriousBox', {
        tags: Object.keys(score),
        userId,
      })
      // const possibleGifts = gifts.filter((gift) => !claimedUserIds[userId]?.includes(gift.id))
      // const randomGift = possibleGifts[Math.floor(Math.random() * possibleGifts.length)]
      // claimedUserIds[userId] = [...(claimedUserIds[userId] || []), randomGift.id]
      // await delay(2000)
      return res.data
    },
    buyGift: async (giftId: string, userId: string): Promise<void> => {
      try {
        const res = await apiClient.post('/buyGift', { giftId, userId })
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
    getGifts: async (userId: string, score: { [tag: string]: number }): Promise<GiftSchema[] | undefined> => {
      console.log('requesting to ', API_URL + '/findrecom')
      try {
        const data = {
          userId,
          score: Object.keys(score).map((tag) => ({
            nombre: tag,
            puntaje: score[tag],
          })),
        }
        console.log('🚀 ~ file: index.ts ~ line 51 ~ getGifts: ~ score', data)

        const res = await apiClient.post('/findrecom', data)
        console.log(res.data)
        return res.data
          .sort((a: any, b: any) => b.puntaje - a.puntaje)
          .map(
            (e: any) =>
              ({
                imgSource: e.image,
                name: e.nombre,
                id: e.id,
              } as GiftSchema)
          )
      } catch (err) {
        console.log(err)
      }
    },
    getRandomGift: async () => {
      try {
        const res = await apiClient.get('/getrandomgift')
        console.log(res.data)
        return res.data.map(
          (value: any) =>
            ({
              imgSource: value.image,
              name: value.name,
              id: value.id,
            } as GiftSchema)
        )
      } catch (error) {
        console.log(error)
      }
    },
  },
  Questions: {
    getQuestions: async (): Promise<Question[] | undefined> => {
      try {
        await delay(2000)
        const res = await apiClient.get('/getrandomquestion')
        const mappedRes = res.data.map(
          (e: any, index) =>
            ({
              id: index,
              title: e.name,
              answers: [
                {
                  id: '0',
                  text: 'No',
                  type: 'negative',
                },
                {
                  id: '1',
                  text: 'Si',
                  type: 'affirmative',
                },
              ],
              tags: e.etiquetas,
            } as Question)
        )
        return mappedRes
      } catch (e) {
        console.log(e)
      }
    },
  },
}

export default Api
