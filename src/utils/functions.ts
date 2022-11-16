export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
