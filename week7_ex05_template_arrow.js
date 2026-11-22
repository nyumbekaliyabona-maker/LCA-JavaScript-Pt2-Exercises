
const learner = "Liyabona";
const topic = "Template Literals and Arrow Functions";

const studyNote = `Learner: ${learner}
Module: ${topic}
Goal: Write cleaner, modern JavaScript`;

console.log(studyNote);

function buildBadge(title, status) {
  return `
    <article class="status-badge">
      <h3>${title}</h3>
      <span>${status}</span>
    </article>
  `;
}

console.log(buildBadge("Exercise 05", "Ready to test"));



const multiplyByTwo = (value) => value * 2;

const formatPrice = (amount) => {
  const rounded = amount.toFixed(2);
  return `R${rounded}`;
};

console.log(multiplyByTwo(8));
console.log(formatPrice(45));


const scores = [12, 25, 8, 40, 19];

const boostedScores = scores.map((score) => score + 5);
const passingScores = scores.filter((score) => score >= 20);

console.log(boostedScores);
console.log(passingScores);

passingScores.forEach((score) => {
  console.log(`Passing score: ${score}`);
});