export type Question = {
  id: string
  title: string
  tags: string[]
  answers: Answer[]
}

export type Answer = {
  id: string
  text: string
  type: 'affirmative' | 'negative'
}

export type Results = {
  [tagName: string]: number
}
