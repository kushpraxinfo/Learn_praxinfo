//desturcturing

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor:"hitehs"
}
const { courseInstructor : instructor} = course

console.log(instructor);
