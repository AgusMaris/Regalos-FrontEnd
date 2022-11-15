import { useEffect, useState } from 'react'
import Api from '../../../Api'
import { TagsCountState } from '../types'

export default function useTagsStats() {
  const [tagsCount, setTagsCount] = useState<TagsCountState>({
    isLoading: true,
    data: null,
    error: null,
  })

  useEffect(() => {
    Api.Stats.getTagsWithCount('').then((d) => {
      setTagsCount({
        isLoading: false,
        data: d,
        error: null,
      })
    })
  }, [])
  return {
    tagsStats: tagsCount,
  }
}
