const daysOfWeek=[
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
]
console.log(daysOfWeek[0])//Monday

//Arrays Method

const primeNumbers=[1,2,3,5,7,11,13,17]

 console.log(primeNumbers.length)//8

 console.log(primeNumbers.join("/"))//1/2/3/5/7/11/13/17

 const courses = [
    { teacher: "Kyle Simpson", course: "JS Function Lite" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React v3" },
    { teacher: "Steve Kinney", course: "State Management" }
  ];
  
  courses.push({ teacher: "Sean Larkin", course: "Webpack" });//sona ekler
  
  console.log(courses);
  
  courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" };//override
  
  console.log(courses);

  courses.pop() //remove last item

  const subbarray=courses.splice(2,1)//

  //forEach Method
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong"
];
​
// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
​
// method 2
cities.forEach(function(city) {
  console.log(city);
});