let expenses = [
  { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
  {
    expenses: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    expenses: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

let arrValues = [];

for (let objectExpenses of expenses) {
  for (let valueExpenses of objectExpenses.expenses) {
    arrValues.push(valueExpenses);
  }
}

//console.log(arrValues);

let filteredValues = arrValues.filter((expense) => {
  return expense > 1000;
});

//console.log(filteredValues);

for (let i = 0; i < filteredValues.length; i++) {
  console.log(`Value variant 1 ${filteredValues[i]}`);
}

filteredValues.forEach(function (value) {
  console.log(`Value variant 2 ${value}`);
});

let sumValues = 0;

for (let sumValue of filteredValues) {
  sumValues += sumValue;
}

console.log(sumValues);
