function makeArray(firstArray, secondArray, maxLength) {

    // 1. Створюємо нову змінну яка буде об'єднувати 2 масиви

    const array = firstArray.concat(secondArray)

    // 2. Створюємо функцію де вказуємо: якщо новий масив довший за вказану довжину maxLength, то виводити масив із вказаною довжиною, якщо ні то виводим array

    if (array.length > maxLength) {
        return array.slice(0, maxLength)
    }
    else { return array }
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []