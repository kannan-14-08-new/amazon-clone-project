const a = 10
const b = 10
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

const sub = (a, b) => {

  if (a < b) {
    return b - a
  }

  return a - b
}

const c = sub(10, 6)

console.log(c);


function ageCal(age) {
  if (Number(age)) {
    switch (age) {
      case age > 18:
        console.log('You are Eligible');
        break
      case age === 18:
        console.log('You are Still');
        break
      case age < 18:
        console.log('You are not Eligible');
        break
      default: console.log('Enter Number');
    }
  }else{
    console.log('Enter the Number');
    
  }
}




