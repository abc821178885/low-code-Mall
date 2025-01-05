export function generateRandomString(length: number = 10): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const chineseCharacters = '一二三四五六七八九十ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const allCharacters = characters + chineseCharacters
  let result = ''
  const charactersLength = allCharacters.length
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength)
    result += allCharacters.charAt(randomIndex)
  }
  return result
}
