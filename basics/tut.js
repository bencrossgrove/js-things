let city = 'Owego';
let country = 'United States';
let location = city + ', ' + country;

console.log(location);

let age = 23;
let isChild = age <= 7;
let isSenior = age >= 65;
console.log(isChild);
console.log(isSenior);


let gradeCalc = function(score, maxScore) {
    let percentEarned = (score / maxScore) * 100;
    let letterGrade;
    if (percentEarned >= 70 && percentEarned <= 79) {
        letterGrade = 'C';
    }
    else if (percentEarned >= 80 && percentEarned <= 89) {
        letterGrade = 'B';
    }
    else if (percentEarned >= 90 && percentEarned <= 100) {
        letterGrade = 'A';
    } else {
        letterGrade = 'D';
    }
    return `You got a ${letterGrade} (${percentEarned}).`;
};

console.log(gradeCalc(65, 100));
console.log(gradeCalc(75, 100));
console.log(gradeCalc(85, 100));
console.log(gradeCalc(95, 100));

