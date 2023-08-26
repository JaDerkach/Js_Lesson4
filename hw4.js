// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// - створити функцію яка приймає масив та виводить кожен його елемент


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
function looper(Array) {
    for (let users of Array) {
        console.log(users)
    } 
}
looper(users)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент;
function writ(history) {
    document.write(`
  <p> ${history} </p>
`);
}

writ('History in Octen school')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function text(a) {
//
//     document.write(
//         `<ul>
//           <li>${a}</li
//          </ul>
// `)
// }
//
// text('Lorem')



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr;
arr = [123, 'lorem', true]
function loop(value){
document.write(`
   <ul>
     <li>${value}</li>
   </ul>
`)
}
loop('123')
loop('lorem')
loop('true')


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function writer(id,name,age){
document.write(`
   <div>
     <p>${id} </p>
     <h>${name} </h>
     <p>${age} </p>
   </div>
`);
}
writer('id: 5','name: Ivan','age: 25');
writer('id: 6','name: Olga','age: 33');
writer('id: 44','name: Pavlo','age: 52');


//
// // - створити функцію яка повертає найменьше число з масиву
//
// // let arr = [58, 19, 25, 78]
// //
// // function numb(array) {
// //     if (array > 26)
// //         for (const item of array) {
// //
// //     }
// // }
// //
// // numb(arr)
// // console.log(arr)log

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//


