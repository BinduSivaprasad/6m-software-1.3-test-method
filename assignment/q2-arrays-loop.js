/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]
 i=0;
function printStudentNames(){
    // Add code here
    for( i=0;i<=7;i++)
    {
    console.log(studentList[i]);
    }

}

printStudentNames();

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}