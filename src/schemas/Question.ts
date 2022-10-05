export type Question = {
  id: string
  title: string
  answers: Answer[]
}

export type Answer = {
  id: string
  text: string
  value: number
}

export type Result = {
  id: string
  answerId: string
}
