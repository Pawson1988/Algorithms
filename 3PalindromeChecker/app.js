const body = document.querySelector("body");
const input = document.querySelector("#pal");
const checkBtn = document.querySelector(".checkBtn");
const result = document.querySelector(".result");

checkBtn.addEventListener("click", () => {
  let value = input.value;
  if (value) {
    let answer = isPalindrome(value);
    if (answer === true) {
      result.textContent = ` ${value.toUpperCase()} is indeed a palindrome!`;
      body.style.backgroundColor = "green";
    } else {
      result.textContent = `${value.toUpperCase()} is not a palindrome!`;
      body.style.backgroundColor = "red";
    }
  } else {
    result.textContent = "Please put a value into the input field";
    body.style.backgroundColor = "aquamarine";
  }
  input.value = "";
});
