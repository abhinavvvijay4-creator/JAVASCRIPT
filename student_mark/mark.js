var name='Adarsh';
let classname ='10-D';
let Mathematics=80;
let Science=85;
let English=90;
const Maxmark=100;
let passed=true;
let undefinedVar;
let remarks=null;
let totalMarks = Mathematics + Science + English;
let average = totalMarks / 3;
let percentage = (totalMarks / (Maxmark * 3)) * 100;
Mathematics += 5;
let mathPass = Mathematics >= 40;
let sciencePass = Science >= 40;
let englishPass = English >= 40;

let averagePass = average >= 50;
let allSubjectsPassed = mathPass && sciencePass && englishPass;

let outstanding = Mathematics > 90 ||
                  Science > 90 ||
                  English > 90;

let failedCondition = !allSubjectsPassed;

passed = allSubjectsPassed && averagePass;
console.log("Student Name:",name);
console.log("class:",classname);
console.log("Mathematics:", Mathematics);
console.log("Science:", Science);
console.log("English:", English);

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", average);
console.log("Percentage:", percentage + "%");

console.log("Mathematics Passed:", mathPass);
console.log("Science Passed:", sciencePass);
console.log("English Passed:", englishPass);
console.log("Average Above 50:", averagePass);

console.log("All Subjects Passed:", allSubjectsPassed);
console.log("Failed Condition:", failedCondition);

console.log("Final Result:", String(passed));
console.log("Outstanding in Any Subject:", outstanding);


console.log("Additional Info:", undefinedVar);
console.log("Remarks:", remarks);
console.log("Maximum Marks Per Subject:", Maxmark);