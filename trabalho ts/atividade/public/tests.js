import Book from "./entities/book";
import Periodical from "./entities/periodical";
import Person, { Gender } from "./entities/person";

let person1 = new Person('John Green' , new Date('1977-08-24T00:00:00') , Gender.Male)
let person2 = new Person('Rick Riordan' , new Date('1964-06-05T00:00:00') , Gender.Male)
let person3 = new Person('Paula Pimenta' , new Date('1975-06-02T00:00:00') , Gender.Female)

let book1 = new Book(123324, 1, 1,'Quem é você, Alasca?', 'O primeiro amigo, a primeira garota, as últimas palavras',  new Date('2005-03-03T00:00:00') , person1)
let book2 = new Book(25367, 1, 2,'Percy Jackson e os Olimpianos', 'O mar de monstros',  new Date('2006-04-01T00:00:00') , person2)
let book3 = new Book(123324, 1, 3,'Minha vida fora de série', '3ª temporada',  new Date('2015-07-07T00:00:00') , person3)

let periodical1 = new Periodical(2445, 1, 2112, 'Super Interessante', 'Origem da vida', new Date('2006-05-03T00:00:00') , person1 )
let periodical2 = new Periodical(2443, 1, 333, 'Super Interessante', 'Universos paralelos', new Date('2015-07-16T00:00:00') , person2 )
let periodical3 = new Periodical(2443, 1, 333, 'Super Interessante', 'A Era da burrice', new Date('2013-12-22T00:00:00') , person3 )
console.log(person1)
console.log(book1)
console.log(periodical1)

console.log(person2)
console.log(book2)
console.log(periodical2)

console.log(person3)
console.log(book3)
console.log(periodical3)