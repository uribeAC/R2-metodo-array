const listOfYears: number[] = [];
for (let year = 2000; year <= 2025; year++) {
  listOfYears.push(year);
}
console.log(`Lista de años desde el 1999: ${listOfYears.join(", ")}`);
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
console.log(words.reverse().join(" "));
console.log("\n");

let examResults: number[] = [];
examResults = [5, 3.2, 7, 8.6, 4];

let sortedExamResults = examResults.sort();

let passExamResult;
for (const individualExamResult of sortedExamResults) {
  if (individualExamResult >= 5) {
    passExamResult = `${passExamResult}, ${individualExamResult}`;
  }
}
console.log(`Los examenes aprobados han sacado estas notas: ${passExamResult}`);

let sumOfResults = 0;
for (const individualExamResult of examResults) {
  sumOfResults = sumOfResults + individualExamResult;
}
console.log(
  `La nota media del examen ha sido ${sumOfResults / examResults.length}!`
);

console.log(
  `La nota mas baja del examen ha sido un ${sortedExamResults.at(
    0
  )} y la nota mas alta un ${sortedExamResults.at(-1)}!`
);
