const years: number[] = [];
for (let year = 2000; year <= 2025; year++) {
  years.push(year);
}
const joinedYears = years.join(", ");
console.log(`Lista de años desde el 1999: ${joinedYears}`);
console.log("\n");

const words = [
  "confín.",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura",
  "su",
  "por",
  "llaman,",
  "le",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];
const wordsSentence = words.reverse().join(" ");
console.log(wordsSentence);
console.log("\n");

let examResults: number[] = [];
examResults = [5, 3.2, 7, 8.6, 4, 10, 9.9, 0];

let sortedExamResults = examResults.sort(function (resultA, resultB) {
  return resultA - resultB;
});

let passExamResults = sortedExamResults.filter(
  (sortedExamResults) => sortedExamResults >= 5
);
const joinedPassExamResults = passExamResults.join(", ");

console.log(
  `Los examenes aprobados han sacado estas notas: ${joinedPassExamResults}`
);

let resultsSum = 0;
examResults.forEach((examResult) => (resultsSum += examResult));

const averageResult = resultsSum / examResults.length;
const averageRoundedResult = averageResult.toFixed(2);

console.log(`La nota media del examen ha sido ${averageRoundedResult}!`);

const lowestExamResult = sortedExamResults.at(0);
const higherExamResult = sortedExamResults.at(-1);

console.log(
  `La nota mas baja del examen ha sido un ${lowestExamResult} y la nota mas alta un ${higherExamResult}!`
);
