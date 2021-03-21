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



//map 
const newCities=cities.map(function(city){
  return city.toUpperCase();
})

console.log(newCities)

console.log("deneme")

//sort 
console.log(primeNumbers.sort())//1,11,13,17,2,3,5,7

console.log(primeNumbers.sort(function(num1,num2){
  if(num1>num2){
    return 1;
  } else if(num2>num1){
    return -1
  }
  return 0
}))//1,2,3,5,7,,11,13,17

console.log(primeNumbers.sort(function(a, b) {
  return a - b;
}));//1,2,3,5,7,11,13,17