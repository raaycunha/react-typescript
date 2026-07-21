let total: number = 150;
const myName: string = 'Ray';
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3]
let infoUser: { userName: string, value: number } = {
  userName: 'Ray',
  value: 12
}
console.log(typeof total, typeof myName, typeof isActive, typeof numbers, typeof infoUser)
console.log(numbers, infoUser)

const myFunction = (numero: number): number => {
  return numero * 2
}

console.log(myFunction(5))