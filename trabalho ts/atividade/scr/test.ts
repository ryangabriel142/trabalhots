import Book from "./entities/book";
import Periodical from "./entities/periodical";
import Person, { Gender } from "./entities/person";

let person1 = new Person('Nicola Sparks', new Date('1965-12-31T00:00:00'), Gender.Male)
let person2 = new Person('Willian Shakespeare', new Date('1564-04-23T00:00:00'), Gender.Male)
let person3 = new Person('J.K. Rowling', new Date('1965-07-31T00:00:00'), Gender.Female)

let book1 = new Book('Diário de uma Paixão', 'Querido John', new Date('2000-12-31T00:00:00'), person1)
let book2 = new Book('Megera Domada', 'Romeu e Julieta', new Date('1564-04-23T00:00:00'), person2)
let book3 = new Book('Harry Potter: Pedra Filosofal', 'Animais Fantasticos: Os crimer de Grindelwald', new Date('1965-07-31T00:00:00'), person2)

let periodical1 = new Periodical(8000, 10, 25, 'Estante Virtual', 'ISTO É',  new Date('2020-11-22T00:00:00'), person1)
let periodical2 = new Periodical(7800, 10, 25, 'Estante Virtual', 'ISTO É',  new Date('2020-11-22T00:00:00'), person2)
let periodical3 = new Periodical(5000, 10, 25, 'Estante Virtual', 'ISTO É',  new Date('2020-11-22T00:00:00'), person2)

console.log(person1)
console.log(book1)
console.log(periodical1)

console.log(person2)
console.log(book2)
console.log(periodical2)

console.log(person3)
console.log(book3)
console.log(periodical3)
