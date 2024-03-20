//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar) //Salida: Tesla
console.log(otherRandomCar) //Salida: Mercedes


//2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(employee.name); //He corregido el código porque me salía que name estaba en desuso. La salida sería: Elon
console.log(otherName); //Salida: Elon


//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password); //Salida: 12345
console.log(hashedPassword); //Salida: undefined (esto se debe a que person no tiene una propiedad password)


//4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second); //Salida: flase
console.log(first == third); //Salida: true


//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); //Salida: value
console.log(secondKey); //Salida: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //Salida: 1
console.log(willThisWork); //Salida: 5