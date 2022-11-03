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

for (let eachObject of expenses) {
  let eachExpenses = eachObject.expenses.length;

  for (let i = 0; i < eachExpenses; i++) {
    if (eachObject.expenses[i] < 1000) {
      const mounts = new Date(`${i + 1}`).toString().split(" ").slice(1, -7);
      console.log(mounts + " " + "and expenses " + eachObject.expenses[i]);
    }
  }
}
