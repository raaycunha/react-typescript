"use strict";
let myUser = {
    id: crypto.randomUUID(),
    userName: 'raaycunha',
    password: '123456qq',
    email: 'exemplo@gmail.com',
    isActive: true,
};
class User {
    constructor(id, userName, password, email, isActive) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.isActive = isActive;
    }
    greet() {
        if (this.isActive)
            console.log(`Hello, my name is: ${this.userName}. Nice to meet you!`);
        else
            console.log('Hello!');
    }
}
const userRay = new User('1opw', 'NoviiC', '1234oip', 'email@gmail.com', true);
console.log(userRay);
userRay.greet();
