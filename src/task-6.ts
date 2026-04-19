// Функція getFirstElement приймає масив і повертає його перший елемент.


// Завдання:

// Зроби функцію узагальненою, використовуючи тип T, щоб вона працювала з масивами будь-якого типу.
// Додай явну типізацію дженериків у виклики функцій.
// Переконайся, що тип елемента, який повертається, точно відповідає типу елементів у масиві.
// Перевір, що TypeScript не дозволяє передати масив змішаних типів без відповідного типу.

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(['a', 'b', 'c']);
const firstBoolean = getFirstElement<boolean>([true, false, true]);

console.log(firstNumber);   // 1
console.log(firstString);   // "a"
console.log(firstBoolean);  // true