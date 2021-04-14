/*
  Directions: you will need to install these packages to run this:
  npm i nodemon
  npm i ts-node
  npm i typescript

  Then run:
  nodemon FizzBuzz.ts
*/

interface Number {
  fizzBuzzify(): string;
}

const obj = {
  fizz: 3,
  buzz: 5
};

const len = 100;

Number.prototype.fizzBuzzify = function (): string {
  let res: string = "";
  Object.keys(obj).forEach((element) => {
    if (this % obj[element] == 0) res += element;
  });
  return res || this.toString();
};

console.log(
  new Array(len)
    .fill(0)
    .map((_, idx) => idx.fizzBuzzify())
    .join('\n')
)