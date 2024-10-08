// console.log('Hello webpack');
// console.log('on browser')

// function accepts any mumber of parameters
function addNums(...args) {
  // console.log(args)
}

// addNums ([2], [3]);
addNums([2], [3], [4]);
addNums(2, 3, 5, 66);
addNums(2, 3, 3, 5, 100);

// js class method
class Maths {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  // js static method
  static multiplyNums(num1, num2) {
    return num1 * num2;
  }
}

const action = new Maths(10, 20);
// console.log(action.multiply())
// console.log(Maths.multiplyNums(11, 11))

/* js prototype */
function Sourav(name, city) {
  this.name = name;
  this.city = city;
  this.greet = () => `Hi, this is ${this.name} from ${this.city}`;
}
Sourav.prototype.skills;
/* add function prototype */
Sourav.prototype.info = function () {
  return `Working in ${this.skills}`;
};
let souravProto = new Sourav('ss', 'kol');
souravProto.skills = 'react.js';
// console.log(souravProto)
// console.log(souravProto.info())

/* js map */
let a = new Map();
/* add key values to map */
a.set(1, 'one');
a.set({ name: 'ss' }, 'Object');
a.set(function name() { }, 'Function');
// console.log(a)

/* Iterate a map */
let mp = [
  [1, 'one'],
  [{ name: 'ss' }, 'object'],
  [function name() { }, 'function'],
];
mp = new Map(mp);
for (let [key, value] of mp.entries()) {
  // console.log('key== ', key, '     value== ', value)
}

// function expression
var x = function (a) {
  // console.log('a-',a)
};
// x (10);

// named function expression
var x1 = function x11(a1) {
  // console.log('a1-',a1)
};
// x1 (20);

// settimeout
// setTimeout (function cb () {
//   // console.log('hello cb')
// }, 2000);

// for (let i=0; i<100000; i++){
// console.log(`loop count ${i}`)
// }

/** Object destructring and rename */
const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
};

const { firstName: myName, lastName = '' } = person
// console.log(myName, lastName);

console.log('ssss')
/** async await fetch */
async function callData() {
  console.log('sssssssssss')
  const _response = await fetch('https://api.github.com/gists/public');
  console.log(_response)
}
callData();