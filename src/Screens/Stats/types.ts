import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../Navigation/RootNavigator'

export type StatsScreenProps = {} & NativeStackScreenProps<RootStackParamList, 'Stats'>

export type TagsCountState = {
  data: { [tag: string]: number } | null
  isLoading: boolean
  error: string | null
}
