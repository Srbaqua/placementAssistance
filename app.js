const {getCandidateStatus} = require('./candidate');


console.log("Welcome to the Placement Preparation Assistant!!");
const candidate = {
    "name":"Saurabh",
    "age":23,
    "company":"Google",
    "role":"Software Engineer",
    "questionSolved":150,
    "skill":["Javascript","C++","Python","Node","SQL","DSA"],
}
// console.log(candidate);
console.log(getCandidateStatus(candidate.questionSolved,true));

const company = process.argv[2];

console.log(`Preparing for ${company}`);