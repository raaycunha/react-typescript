interface UserInfo {
  id: string;
  userName: string;
  password: string;
  email: string;
  isActive: boolean;
}

let myUser: UserInfo = {
  id: crypto.randomUUID(),
  userName: 'raaycunha',
  password: '123456qq',
  email: 'exemplo@gmail.com',
  isActive: true,
}

class User implements UserInfo {
  constructor(
    public id: string,
    public userName: string,
    public password: string,
    public email: string,
    public isActive: boolean
  ) {}
  greet() {
    if (this.isActive) console.log(`Hello, my name is: ${this.userName}. Nice to meet you!`)
    else console.log('Hello!')
  }
}

const userRay = new User('1opw', 'NoviiC', '1234oip', 'email@gmail.com', true)
console.log(userRay)
userRay.greet()