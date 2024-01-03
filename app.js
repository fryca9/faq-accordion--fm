const questions = document.querySelectorAll(".faqs__question--block");
const toggle = document.querySelectorAll(".question--line");

toggle.forEach(function showText(btn, index) {
  btn.addEventListener("click", function toggleClass() {
    const currentQuestion = questions[index];
    const isAlreadyOpened = currentQuestion.classList.contains("show-text");

    questions.forEach(function removeClass(question) {
      question.classList.remove("show-text");
    });

    if (!isAlreadyOpened) {
      currentQuestion.classList.add("show-text");
    }
  });
});
