var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

function problemOne(array) {
  var newArray = []
  array.forEach(function(student) {
    newArray.push(student.age);
  });
  return newArray;
}

console.log(problemOne(students));

function problemTwo(array) {
  var newArray = []
  array.forEach(function(student) {
    newArray.push([student.name, student.city]);
  });
  return newArray;
}

console.log(problemTwo(students));

function problemThree(array) {
  var newArray = []
  array.forEach(function(student) {
    if (student.city === "Boulder") {
      newArray.push(student.name + " is from " + student.city);
    }
  });
  return newArray;
}

console.log(problemThree(students));

function problemFour(array) {
  var newArray = []
  array.forEach(function(student) {
    if (student.age > 25) {
      newArray.push(student.name + " is older than 25");
    }
  });
  return newArray;
}

console.log(problemFour(students));
