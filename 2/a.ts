import { data } from './input'

const result = data
  .split('\n')
  .map((str) => evalMatch(str))
  .reduce((total, element) => {
    return total + element
  })

console.log(result)

function evalMatch(match: string): number {
  if (match.length === 0) return 0 //eof

  const opponent = match.charAt(0)
  const player = match.charAt(2)

  const symbolValue = player === 'X' ? 1 : player === 'Y' ? 2 : 3

  if (opponent === 'A' && player === 'X') return 3 + symbolValue
  else if (opponent === 'A' && player === 'Y') return 6 + symbolValue
  else if (opponent === 'A' && player === 'Z') return 0 + symbolValue
  else if (opponent === 'B' && player === 'X') return 0 + symbolValue
  else if (opponent === 'B' && player === 'Y') return 3 + symbolValue
  else if (opponent === 'B' && player === 'Z') return 6 + symbolValue
  else if (opponent === 'C' && player === 'X') return 6 + symbolValue
  else if (opponent === 'C' && player === 'Y') return 0 + symbolValue
  else if (opponent === 'C' && player === 'Z') return 3 + symbolValue
  else throw Error(`shouldn't happen: ${match}, ${opponent}, ${player}`)
}
