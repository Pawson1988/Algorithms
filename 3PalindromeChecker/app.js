const body = document.querySelector("body");
const input = document.querySelector("#pal");
const checkBtn = document.querySelector(".checkBtn");
const result = document.querySelector(".result");

checkBtn.addEventListener("click", () => {
  if (input.value) {
    let answer = isPalindrome(input.value);
    if (answer === true) {
      result.textContent = "Your text is indeed a palindrome!";
      body.style.backgroundColor = "green";
    } else {
      result.textContent = "This is not a palindrome!";
      body.style.backgroundColor = "red";
    }
  } else {
    result.textContent = "Please put a value into the input field";
  }
});
