
let globalCount = 0;
function incrementGlobalCount() {
  let localCount = 5;
  console.log(localCount);
  
}

function modifyBothVariables() {
  globalCount += 1;
  let localCount = 10;
  console.log(globalCount);
  console.log(localCount);
}
incrementGlobalCount();
modifyBothVariables();

function Student(name, age, grade, course) {
  this.name = name;
  this.age = age;
  this.grade = grade;
  this.course = course;
}

let student1 =  new Student("Alice", 20, "A", "Math");
let student2 =  new Student("Bob", 22, "B", "Science");
let student3 =  new Student("Charlie", 21, "C", "History");
let student4 =  new Student("David", 23, "D", "Art");

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);

let courseProfile = {
  courseName: "Computer Science",
  instructor: "Dr. Smith",
  students: [student1, student2, student3, student4]
};
console.log(courseProfile);
