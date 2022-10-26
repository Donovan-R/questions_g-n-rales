const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");
// console.log(btns);
// console.log("hello");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     const ans = btn.parentElement.parentElement;
//     ans.classList.toggle("show-text");
//   });
// });

questions.forEach(function (question) {
  question.addEventListener("click", function (e) {
    questions.forEach(function (questionNow) {
      if (questionNow !== e.currentTarget) {
        questionNow.classList.remove("show-text");
      }
    });
    e.currentTarget.classList.toggle("show-text");
    console.log(question);
    console.log(e.currentTarget);
  });
});
