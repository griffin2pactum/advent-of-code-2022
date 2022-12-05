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

  const matchResultValue = player === 'X' ? 0 : player === 'Y' ? 3 : 6

  const rock = 1
  const paper = 2
  const scissors = 3


  if (opponent === 'A' && player === 'X') return scissors + matchResultValue
  else if (opponent === 'A' && player === 'Y') return rock + matchResultValue
  else if (opponent === 'A' && player === 'Z') return paper + matchResultValue
  else if (opponent === 'B' && player === 'X') return rock + matchResultValue
  else if (opponent === 'B' && player === 'Y') return paper + matchResultValue
  else if (opponent === 'B' && player === 'Z') return scissors + matchResultValue
  else if (opponent === 'C' && player === 'X') return paper + matchResultValue
  else if (opponent === 'C' && player === 'Y') return scissors + matchResultValue
  else if (opponent === 'C' && player === 'Z') return rock + matchResultValue
  else throw Error(`shouldn't happen: ${match}, ${opponent}, ${player}`)
}
