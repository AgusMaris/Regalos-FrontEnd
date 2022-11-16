import axios from 'axios'
import { Beneficiary } from '../schemas/Beneficiary'
import { GiftSchema } from '../schemas/Gift'
import { Question } from '../schemas/Question'
import { delay } from '../utils/functions'
import MockedGifts from './MockedGifts.json'

const gifts = MockedGifts.data

const URLS = {
  local: 'http://192.168.0.10:3000',
  prod: 'https://regalos-backend-production.up.railway.app',
}

const API_URL = URLS.local

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
      userId: string,
      beneficiaryId: number
    ): Promise<typeof gifts[number]> => {
      const res = await apiClient.post('/mysteriousBox', {
        tags: Object.keys(score),
        userId,
        beneficiaryId,
      })
      return res.data
    },
    buyGift: async (giftId: string, userId: string, beneficiaryId: number): Promise<void> => {
      try {
        const res = await apiClient.post('/buyGift', { giftId, userId, beneficiaryId })
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
    getGifts: async (
      userId: string,
      score: { [tag: string]: number },
      beneficiaryId: number
    ): Promise<GiftSchema[] | undefined> => {
      console.log('requesting to ', API_URL + '/findrecom')
      try {
        const data = {
          userId,
          score: Object.keys(score).map((tag) => ({
            nombre: tag,
            puntaje: score[tag],
          })),
          beneficiaryId,
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

    getGiftsFromVendor: async (
      vendorId: string
    ): Promise<
      {
        id: any
        name: any
        feedback: {
          positive: any
          negative: any
        }
      }[]
    > => {
      const { data } = await apiClient.get('/getvendor', {
        id_usuario: vendorId,
      })

      console.log(data)

      return data
    },
    uploadGift: async (prod:{},data:string[],id_user:string)=>{
      try {
        apiClient.post('/uploadgift',{...prod,tag:data,id_user})
      } catch (error) {
        console.log(error)
      }
    },

    sendGiftFeedback: async (id_regalo: string, id_user: string, option: 's' | 'n') => {
      try {
        const res = await apiClient.post('/uploadfeedback', {
          id_regalo: id_regalo,
          id_usuario: id_user,
          calificacion: option,
        })
        console.log(res)
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
  Beneficiaries: {
    getBeneficiaries: async (id_user:string): Promise<Beneficiary[] | undefined> => {
      try {
        console.log(id_user)
        const { data } = await apiClient.post<Beneficiary[]>('/getbeneficiary',{ id_user })
        return data
      } catch (e) {
        console.log(e)
      }
    },
    postBeneficiary: async (name: string, apellido: string, id_user:string): Promise<void> => {
      try {
        const res = await apiClient.post('/newbeneficiary', { name, apellido,id_user })
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
  },

  Stats: {
    getTagsWithCount: async (userId: string): Promise<{ [tag: string]: number } | null> => {
      await delay(2000)
      const { data } = await apiClient.get<
        {
          idetiqueta: number
          etiqueta: string
          count: number
        }[]
      >('/getBoughtGiftsTags')

      const tags: Record<string, number> = {}

      for (const tag of data) {
        tags[tag.etiqueta] = tag.count
      }

      return tags
    },
  },
}

export default Api
