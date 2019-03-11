/***************************************** SECTION 2 ********************************************************/

// ****************CODING CHALLENGE 1****************

/* 
var markHeight = 1.6;
var markMass = 80;
var markBMI = markMass / (markHeight * markHeight);
var johnHeight = 1.9;
var johnMass = 280;
var johnBMI = johnMass / (johnHeight * johnHeight);
var marksBmiHigher = markBMI > johnBMI; 
*/

// ********************CODING CHALLENGE 2*********************

/* 
let johnsGame1Score = 0;
let johnsGame2Score = 0;
let johnsGame3Score = 0;
let johnsAverageScore =
  (johnsGame1Score + johnsGame2Score + johnsGame3Score) / 3;

let mikeGame1Score = 0;
let mikeGame2Score = 0;
let mikeGame3Score = 0;
let mikeAverageScore = (mikeGame1Score + mikeGame2Score + mikeGame3Score) / 3;

let marysGame1Score = 0;
let marysGame2Score = 0;
let marysGame3Score = 0;
let marysAverageScore =
  (marysGame1Score + marysGame2Score + marysGame3Score) / 3;

if (
  johnsAverageScore > mikeAverageScore &&
  johnsAverageScore > marysAverageScore
) {
  console.log(
    `johns average score ${johnsAverageScore} is higer then mikes average score ${mikeAverageScore} and marys average score ${marysAverageScore}`
  );
} else if (
  johnsAverageScore < mikeAverageScore &&
  marysAverageScore > marysAverageScore
) {
  console.log(
    `mikes average score ${mikeAverageScore} is higer then johns average score ${johnsAverageScore} and marys average score ${marysAverageScore}`
  );
} else if (
  marysAverageScore > mikeAverageScore &&
  johnsAverageScore < marysAverageScore
) {
  console.log(
    `marrys average score ${marysAverageScore} is higer then marks average score ${mikeAverageScore} and johns average score ${johnsAverageScore}`
  );
} else {
  console.log(
    ` mikes score ${mikeAverageScore} - johns score ${johnsAverageScore} - marrys score ${marysAverageScore} = Draw`
  );
} */

//***''''***********'''''FUNCTIONS''''''''''***********'''********''****'

/* 
function calculate(birthYear) {
  return 2019 - birthYear;
}
let melodysAge = calculate(2011);
let seansAge = calculate(2009);
let vanessasAge = calculate(1979);
let jimmysAge = calculate(1981);
console.log(`Jimmys age is ${jimmysAge} `);
console.log(`Melodys age is ${melodysAge} `);
console.log(`Seans age is ${seansAge}`);
console.log(`Vanessas age is ${vanessasAge} `);

function yearsUntilRetirement(year, person) {
  var age = calculate(year);
  var retirement = 73 - age;
  if (retirement > 0) {
    console.log(`${person} retirement in ${retirement} years.`);
  } else {
    let beenRetiredForYears = age - 73;
    console.log(`${person} has been retired for ${beenRetiredForYears} years.`);
  }
}
yearsUntilRetirement(1981, 'jimmy');
yearsUntilRetirement(1979, 'Vanessa');
yearsUntilRetirement(2011, 'Melody');
yearsUntilRetirement(2009, 'Sean');
yearsUntilRetirement(1921, 'Bertil');

//****************** *''''''''functions Statements and Expressions''''''*********

//function declaration
//function whatDoYouDo(name,jobb){}

//function Expression
let whatDoYouDo = function(name, job) {
  switch (job) {
    case 'teacher':
      return `${name} works as a teacher`;
    case 'driver':
      return `${name} works as a driver`;
    case 'developer':
      return `${name} works as a developer`;
    default:
      return `${name} does not work`;
  }
};

console.log(whatDoYouDo('Jimmy', 'developer')); 
*/

//************''''''''''***********'''''''''''Array''''''*****************''**********

//initialize new array
/*
 let names = ['Jimmy', 'Vanessa', 'Sean', 'Melody'];
let age = new Array(37, 39, 10, 8);

//Mutate arrray data
names[0] = 'Sune';
names[names.length] = 'Valentine';

//different data types in array

let john = ['John', 'Smith', 1980, false];
john.push('blue');
john.unshift('Mr');
john.pop();
john.shift();

console.log(john.indexOf(223));

var isDesigner =
  john.indexOf('designer') === -1
    ? 'John is Not a designer'
    : 'John is a designer';
console.log(isDesigner); 
*/

// ****************CODING CHALLENGE 3****************

/*
 var tip02 = 20 / 100;
var tip015 = 15 / 100;
var tip01 = 10 / 100;

var tips = [];
var paidAmountWithTips = [];

function tipCalculator(billPrice) {
  if (billPrice < 50) {
    tips.push(tip02);
    let total = billPrice + billPrice * tip02;

    paidAmountWithTips.push(total);
  } else if (billPrice >= 50 && billPrice <= 200) {
    tips.push(tip015);
    let total = billPrice + billPrice * tip015;
    paidAmountWithTips.push(total);
  } else {
    tips.push(tip01);
    let total = billPrice + billPrice * tip01;
    paidAmountWithTips.push(total);
  }
}

console.log(tipCalculator(124));
console.log(tipCalculator(48));
console.log(tipCalculator(268));
console.log('tips');
console.log(tips);
console.log('paidAmountWithTips');
console.log(paidAmountWithTips); 
*/

//''''''*********''''******'''''Objects and propertys''''''''''***********'''********''''******''''******

//object literal
/*
 let john = {
  firstName: 'John',
  lastName: 'Dho',
  birthYear: 1904,
  family: ['Jane', 'Tobii', 'Patric'],
  job: 'developer',
  isSingle: true
};

console.log(`My full name is ${john.firstName} ${john['lastName']}`);
var x = john.job;
console.log(`and I am a ${x}`);
john.job = 'driver';
console.log(`But i would like to be a ${john.job}`);

// new object syntax
let jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
console.log(jane); 
*/

//Objects and methods

/* let john = {
  firstName: 'John',
  lastName: 'Dho',
  birthYear: 1981,
  family: ['Jane', 'Tobii', 'Patric'],
  job: 'developer',
  isSingle: true,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john); */

// coding challenge 4

/*
 let john = {
  name: 'John',
  height: 1.95,
  mass: 92,
  calcBmi: function() {
    return (this.bmi = this.mass / (this.height * this.height));
  }
};
let mike = {
  name: 'Mike',
  height: 1.69,
  mass: 78,
  calcBmi: function() {
    return (this.bmi = this.mass / (this.height * this.height));
  }
};

console.log(john, mike);

if (john.calcBmi() > mike.calcBmi()) {
  console.log(
    `${john.name}'s BMI is ${jhon.bmi} and it is higher then ${
      mike.name
    }'s BMI ${mike.bmi}`
  );
} else if (mike.bmi > john.bmi) {
  console.log(
    `${mike.name}'s BMI is ${mike.bmi} and it is higher then ${
      john.name
    }'s BMI ${john.bmi}`
  );
} else {
  console.log(
    `${mike.name} and ${john.name} has the same BMI ${john.bmi} ${mike.bmi}`
  );
} 
*/
// ''''''*********''''*******''''Loops and Iteration*****************''''''''''**************''''********'

/* 
let john = ['John', 'Smith', 1980, false];

for (let i = 0; i < john.length; i++) {
  console.log(john[i]);
}
let j = 0;
while (j < john.length) {
  console.log(john[j]);

  j++;
}

//continue and break statments

let me = ['Jimmy', 'Wongprom', 1981, false, 'developer'];

for (let i = 0; i < me.length; i++) {
  if (typeof me[i] !== 'string') continue;
  console.log(me[i]);
}
for (let i = 0; i < me.length; i++) {
  if (typeof me[i] !== 'string') break;
  console.log(me[i]);
}

//Looping backwords
for (let i = me.length - 1; i >= 0; i--) {
  console.log(me[i]);
} 
*/

// ********************CODING CHALLENGE 2*********************

/* 
// part 1
let john = {
  name: 'John',
  bills: [124, 48, 268, 180, 42],
  calcTip: function() {
    this.tips = [];
    this.finalValues = [];
    for (let i = 0; i < this.bills.length; i++) {
      // determine percentage based on tipping rules
      let percentage;
      let bill = this.bills[i];
      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      //add results to the corresponding array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

//part 2

let mark = {
  name: 'mark',
  bills: [77, 475, 110, 75],
  calcTip: function() {
    this.tips = [];
    this.finalValues = [];
    for (let i = 0; i < this.bills.length; i++) {
      // determine percentage based on tipping rules
      let percentage;
      let bill = this.bills[i];
      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      //add results to the corresponding array
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  let sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
//do the calculations
john.calcTip();
mark.calcTip();

john.averageTips = calcAverage(john.tips);
mark.averageTips = calcAverage(mark.tips);
console.log(john, mark);

if (john.averageTips > mark.averageTips) {
  console.log(
    `${john.name} pays higher tips, with an average of ${john.averageTips}`
  );
} else {
  console.log(
    `${mark.name} pays higher tips, with an average of ${mark.averageTips}`
  );
} 
*/

/***************************************** SECTION 3 ********************************************************/
