import { delay } from '../utils/functions'
import MockedGifts from './MockedGifts.json'

const gifts = MockedGifts.data

const claimedUserIds: Record<string, string[]> = {}

const Api = {
  Gifts: {
    getMysteriousBoxGift: async (userId: string): Promise<typeof gifts[number]> => {
      const possibleGifts = gifts.filter((gift) => !claimedUserIds[userId]?.includes(gift.id))
      const randomGift = possibleGifts[Math.floor(Math.random() * possibleGifts.length)]
      claimedUserIds[userId] = [...(claimedUserIds[userId] || []), randomGift.id]
      await delay(2000)
      return randomGift
    },
  },
}

export default Api
