import { data } from './input'

let max: number = 0

data.split('\n\n').forEach((str) => {
  const val = str
    .split('\n')
    .map((i) => parseInt(i))
    .reduce((sum, current) => {
      return sum + current
    })
  if (val > max) max = val
})

console.log(max)
