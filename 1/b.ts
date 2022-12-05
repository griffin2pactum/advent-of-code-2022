import { data } from './input'

const sorted = data.split('\n\n').map((str) => {
  return str
    .split('\n')
    .map((i) => parseInt(i))
    .reduce((sum, current) => {
      return sum + current
    })
}).sort((a,b) => a < b ? 1 : -1)

console.log(`${sorted[0] + sorted[1] + sorted[2]}`)