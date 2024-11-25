// Flashcard data
const flashcards = [
  { question: "What is the chemical symbol for water?", answer: "H2O" },
  { question: "Who is known as the father of computers?", answer: "Charles Babbage" },
  { question: "What does HTML stand for?", answer: "HyperText Markup Language" },
  { question: "What is 5 + 7?", answer: "12" },
];

let learnedCount = 0;
let notLearnedCount = 0;

// Create flashcards dynamically
const flashcardContainer = document.getElementById("flashcards");

flashcards.forEach((card, index) => {
  const flashcard = document.createElement("div");
  flashcard.classList.add("flashcard");

  const inner = document.createElement("div");
  inner.classList.add("inner");

  const front = document.createElement("div");
  front.classList.add("front");
  front.textContent = card.question;

  const back = document.createElement("div");
  back.classList.add("back");
  back.textContent = card.answer;

  inner.appendChild(front);
  inner.appendChild(back);
  flashcard.appendChild(inner);
  flashcardContainer.appendChild(flashcard);

  // Flip card on click
  flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
  });

  // Add "Learned" and "Not Learned" buttons
  const buttons = document.createElement("div");
  buttons.style.marginTop = "10px";

  const learnedButton = document.createElement("button");
  learnedButton.textContent = "Learned";
  learnedButton.addEventListener("click", () => {
    learnedCount++;
    updateProgress();
    flashcard.remove();
  });

  const notLearnedButton = document.createElement("button");
  notLearnedButton.textContent = "Not Learned";
  notLearnedButton.addEventListener("click", () => {
    notLearnedCount++;
    updateProgress();
    flashcard.remove();
  });

  buttons.appendChild(learnedButton);
  buttons.appendChild(notLearnedButton);
  flashcard.appendChild(buttons);
});

// Update progress
function updateProgress() {
  document.getElementById("learned").textContent = `Learned: ${learnedCount}`;
  document.getElementById("not-learned").textContent = `Not Learned: ${notLearnedCount}`;
}
