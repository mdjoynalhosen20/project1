// problem 1
function filterEvenNumbers(numbers: number[]): number[] {
  let evenNumbers: number[] = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}

// problem 2
function reverseString(text: string): string {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  return reversed;
}


// problem 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}


// problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = {
    id: 1, 
    name: "John Doe",
    age: 21 
};
console.log(getProperty(user, "name"));


// problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    ...book,
    isRead: true,
  };
}


// problem 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}


// problem 7
function getIntersection(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];

  for (let num of arr1) {
    if (arr2.includes(num)) {
      result.push(num);
    }
  }

  return result;
}




