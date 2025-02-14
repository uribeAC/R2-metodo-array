const years: number[] = [];
for (let year = 2000; year <= 2025; year++) {
  years.push(year);
}
console.log(`Lista de años desde el 1999: ${years.join(", ")}`);
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
examResults = [5, 3.2, 7, 8.6, 4, 10, 9.9, 0];

let sortedExamResults = examResults.sort(function (a, b) {
  return a - b;
});

let passExamResult = sortedExamResults.filter(
  (sortedExamResults) => sortedExamResults >= 5
);

console.log(`Los examenes aprobados han sacado estas notas: ${passExamResult}`);

let sumOfResults = 0;
for (const individualExamResult of examResults) {
  sumOfResults = sumOfResults + individualExamResult;
}

const averageExams = sumOfResults / examResults.length;

console.log(`La nota media del examen ha sido ${averageExams.toFixed(2)}!`);

console.log(
  `La nota mas baja del examen ha sido un ${sortedExamResults.at(
    0
  )} y la nota mas alta un ${sortedExamResults.at(-1)}!`
);
