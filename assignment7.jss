
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);


const  lucasBMI = 100 / 1.56;
const johnBMI = 150 / 1.82;

console.log(lucasBMI);
console.log(johnBMI);

console.log(`Lucas's BMI: ${lucasBMI} is less than John's BMI: ${johnBMI}`);


const netsScore1 = (96 + 108 + 89) / 3;
const knicksScore1 = (88 + 91 + 110) /3;

console.log(`Data 1: The Nets average score: ${netsScore1} and the Knicks average score ${knicksScore1}, there are no winners.`);

const netsScore2 = (97 + 112 + 101) / 3;
const knicksScore2 = (109 + 95 + 123) /3;

console.log(`Data 2: The Nets average score: ${netsScore2} and the Knicks average score ${knicksScore2}, the Knicks are the winners.`);

const netsScore3 = (97 + 112 + 101) / 3;
const knicksScore3 = (109 + 95 + 106) /3;

console.log(`Data 3: The Nets average score: ${netsScore3} and the Knicks average score ${knicksScore3}, the Knicks are the winners.`);