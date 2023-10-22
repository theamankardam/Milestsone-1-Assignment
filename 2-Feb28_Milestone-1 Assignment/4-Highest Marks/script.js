
let allstudentMarks1 = []; // It take value with the help of prompt
let allstudentMarks2 = [45, 59, 89, 78, 57];

for (let i = 1; i <= 5; i++) {
    let studentMarks = prompt(`Enter the Student ${i} Marks out of 100`);
    studentMarks = Number.parseInt(studentMarks);
    allstudentMarks1.push(studentMarks);
}

highestMarks(allstudentMarks1)
highestMarks(allstudentMarks2)


function highestMarks(arr) {
    max = arr[0];
    let count = 0;
    for (let i = 1; i <= 5; i++) {
        max = arr[i] > max ? max = arr[i] : max = max; // Using Ternary Operator
        count = i;
    }
    console.log(`Highest Marks of Student ${count} is ${max}`);
}