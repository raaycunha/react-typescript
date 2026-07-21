const firstElement = <T>(arrayTarget: T[]): T => {
  return arrayTarget[0]
}

const letras = ['A', 'B', 'C']
console.log(firstElement(letras))
const numbersTwo = [1, 2, 3, 4, 5]
console.log(firstElement(numbersTwo))