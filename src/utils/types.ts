export type AsyncState<T> = {
  isLoading: boolean
  error: Error | null
  data: T extends unknown[] ? T : T | null
}
