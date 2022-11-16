export interface GiftSchema {
  id?: string
  name: string
  imgSource: string
  tags: Array<string>
  price: number | null
}
