const algumaCoisa = <T extends { age: number }>(obj: T): void => {
  console.log(`Você tem ${obj.age} anos.`)
}
algumaCoisa({ name: 'Ray', age: 18 })