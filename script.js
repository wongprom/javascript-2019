/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

//--------------------------------------------------------------- OBJECTS AND FUNCTIONS ----------------------------------------

//Function constructor
/*
let john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'developer'
};

var Person = function(name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
};

Person.prototype.calcAge = function() {
  console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Backstrom';

var jimmy = new Person('Jimmy', 1981, 'Intern');
console.log('TCL: jimmy', jimmy);
console.log(jimmy.lastName);
var vanessa = new Person('Vanessa', 1979, 'Developer');
var sean = new Person('Sean', 2009);
var melody = new Person('Melody', 2011, 'Crafting things');

console.log(sean.lastName);

var Car = function(
  color,
  maxSpeed,
  carName,
  carModel,
  combi_ToF,
  manufactureYear
) {
  (this.color = color),
    (this.maxSpeed = maxSpeed),
    (this.carName = carName),
    (this.carModel = carModel),
    (this.combi_ToF = combi_ToF);
  this.manufactureYear = manufactureYear;
};

Car.prototype.yearsOld = function(manufactureYear) {
  return 2019 - manufactureYear;
};
var volvo = new Car('white', 230, 'Volvo', 'XC90 T8', false, 2018);
var nissan = new Car(
  'Metallic Blue',
  220,
  'Nissan Sky Line',
  'GTR',
  false,
  1999
);

console.log('TCL: volvo', volvo);

console.log(nissan);
console.log(nissan.yearsOld(nissan.manufactureYear));

*/

//************************************************Object.create()****************************************** */

/* var personProtoType = {
  calcAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};
let jimmy = Object.create(personProtoType);
jimmy.job = 'developer';
jimmy.yearOfBirth = 1981;
jimmy.name = 'Jimmy';
console.log(jimmy);


//*****ANOTHER BETTER WAY TO "FILL" AN OBJECT*******


var vanessa = Object.create(personProtoType, {
  name: { value: 'Vanessa' },
  yearOfBirth: { value: 1979 },
  job: { value: 'FrontEnd Developer' }
});
console.log(vanessa);
 */

// ////////////Primitives (null, undefined, string, numbers, boolean) vs Objects(functions...all the rest)//////////////////

//primitivs
/*

var a = 23;
var b = a;
a = 34545;

console.log('TCL: a', a);
console.log('TCL: b', b);

//objects
var obj1 = {
  name: 'Patrik',
  age: 55
};

var obj2 = obj1;
obj1.age = 987;

console.log(obj1);
console.log(obj2);

//functions
var age = 45;
var obj = {
  name: 'Lars',
  city: 'Solna'
};

function change(a, o) {
  a = 999;
  o.city = 'Hemse';
  console.log(a);
}

change(age, obj);
console.log(a);
console.log(obj.city);

*/

///////Lecture : Passing functions as arguments //////////////////

/*
var years = [1981, 1979, 2009, 2011];

function arrayCalc(array, func) {
  var arrRes = [];

  for (var i = 0; i < array.length; i++) {
    arrRes.push(func(array[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return 'you are not between the age of 18 and 81, Sorry';
  }
}
var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxHeartBeat = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(maxHeartBeat);
*/


///////Lecture : Functions returning functions //////////////////

/*
function interViewQuestions(jobb) {
  if (jobb === 'designer') {
    return function (name) {
      console.log(`${name}, can you please explain what UX design is?`);
    }
  } else if (jobb === 'teacher') {
    return function (name) {
      console.log(`What subject do you teach, ${name}?`);
    }
  } else {
    return function (name) {
      console.log(`Hello ${name}, what do you do?`);
    }
  }
}

var designerQuestion = interViewQuestions('designer')
var teacherQuestion = interViewQuestions('teacher')
var driverQuestion = interViewQuestions('driver')

teacherQuestion('Vanessa')
teacherQuestion('Sara')
teacherQuestion('Patrik')
designerQuestion('jimmy')
designerQuestion('sebbe')
designerQuestion('sean')
driverQuestion('Bullen')
*/

///////Lecture : Closures //////////////////
//An inner function has always acces to the variables and parameters of it's outer function, even after the outer function has returned.

/*
function retirement(retirementAge) {
  var a = `years left until retiremnt`;
  return function (yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log((retirementAge - age) + ` ${a}`);
  }
}
var retirementUSA = retirement(66);
retirementUSA(1981)

var retirementGermany = retirement(65);
retirementGermany(1981)

var retirementIceland = retirement(67);
retirementIceland(1981);
*/

//Clouseres CHALLENGE, rewrite interViewQuestions() function with clouseres/////////

/*
function interViewQuestions(jobb) {
  if (jobb === 'designer') {
    return function (name) {
      console.log(`${name}, can you please explain what UX design is?`);
    }
  } else if (jobb === 'teacher') {
    return function (name) {
      console.log(`What subject do you teach, ${name}?`);
    }
  } else {
    return function (name) {
      console.log(`Hello ${name}, what do you do?`);
    }
  }
}

var designerQuestion = interViewQuestions('designer')
var teacherQuestion = interViewQuestions('teacher')
var driverQuestion = interViewQuestions('driver')

teacherQuestion('Vanessa')
teacherQuestion('Sara')
teacherQuestion('Patrik')
designerQuestion('jimmy')
designerQuestion('sebbe')
designerQuestion('sean')
driverQuestion('Bullen')
*/


//rewritten code
/*
function interViewQuestions(job) {
  return function (name) {
    if (job === 'teacher') {
      console.log(`What subject do you teach, ${name}?`);
    } else if (job === 'developer') {
      console.log(`${name}, can you please explain what UX design is?`);
    } else {
      console.log(`Hello ${name}, what do you do?`);
    }
  }
}

interViewQuestions('developer')('Jimmy')
interViewQuestions('chef')('Patrik')
*/

///////Lecture : Bind, Call and Apply //////////////////

/* var john = {
  name: 'John',
  age: 20,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(`Good ${timeOfDay} , Ladies and gentlement! I'm ${this.name} and I 'm a ${this.job} and I 'm ${this.age} years old.`);
    } else if (style === 'friendly') {
      console.log(`Hey! What's up ? I'm ${this.name} and I 'm a ${this.job} and I 'm ${this.age} years old. Have a nice ${timeOfDay}.`);
    }
  }
}
var sean = {
  name: 'Sean',
  age: 10,
  job: 'school boy'
}

var melody = {
  name: 'Melody',
  age: 8,
  job: 'kid that loves my family'
}

john.presentation('formal', 'Morning')

//call method. First argument set the this to sean.
john.presentation.call(sean, 'friendly', 'night')

//apply method. First argument set the this to sean. Then takes an array as argument
john.presentation.apply(sean, ['formal', 'morning'])

//bind method.
var melodyFriendly = john.presentation.bind(melody, 'friendly');
melodyFriendly('morning')
 */


//another bind method exempel


/*
var years = [1981, 1979, 2009, 2011];
function arrayCalc(array, func) {
  var arrRes = [];

  for (var i = 0; i < array.length; i++) {
    arrRes.push(func(array[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2019 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calcAge);

var limitSweden = arrayCalc(ages, isFullAge.bind(this, 18));
console.log(ages);
console.log(limitSweden);
*/


//start

// var question = {
//   color: 'white',
//   car: 'volvo',
//   freeTime: 'run'
// }

var Question = function (question, answer, checkAnswer) {
  (this.question = question), (this.answer = answer), (this, checkAnswer = checkAnswer)
}

var question1 = new Question('Do you like Volvo?', ['yes', 'no'], 0)





var Person = function (name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
};

Person.prototype.calcAge = function () {
  console.log(2019 - this.yearOfBirth);
};



var jimmy = new Person('Jimmy', 1981, 'Intern');
console.log('TCL: jimmy', jimmy);
Person.prototype.lastName = 'Backstrom';
console.log(jimmy.lastName);



var vanessa = new Person('Vanessa', 1979, 'Developer');
var sean = new Person('Sean', 2009);
var melody = new Person('Melody', 2011, 'Crafting things');



console.log(sean.lastName); 