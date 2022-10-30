const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let scores = [];

let maxScorePoints = 0;

for (let player of players) {
  maxScorePoints = player.scorePoints;
  scores.push(maxScorePoints);
}

console.log(Math.max(...scores));
