// Imports from the utils.js file
const { hasPassingGrade } = require('./utils.js');

// this part declares the variaiable for the info
const studentName = "John Doe";
const grades = [88, 92, 78, 95, 85]; //Variable that can be change to test if the bottom code works
const studentDetails = {
    major: "Computer Science",
    year: 3
};

// A function to calculate the avarage of the grade
const calculateAverage = (gradeArray) => {
    const sum = gradeArray.reduce((acc, curr) => acc + curr, 0);
    return sum / gradeArray.length;
};

// Just to put a log in the new calculated grade
const averageGrade = calculateAverage(grades);

console.log(`Student: ${studentName}`); //for the student
console.log(`Major: ${studentDetails.major}`); //for the studentDetails
console.log(`Year: ${studentDetails.year}`); //for  the year
console.log(`Grades: ${grades.join(', ')}`); //for the array code
console.log(`Average Grade: ${averageGrade.toFixed(2)}`); //for the calcualted avarage in function

// Check if average grade is passing
if (hasPassingGrade(averageGrade)) {
    console.log("Congratulations! You have a passing average.");
} else {
    console.log("You need to improve your average grade.");
}
