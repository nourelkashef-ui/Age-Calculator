let birthYearInput = document.getElementById("birthYear");
let button = document.getElementById("calculateBtn");
let result = document.getElementById("result");

button.addEventListener("click", function() {
    let birthYear = birthYearInput.value;
    if (birthYear === "") {
        result.textContent = "Please Enter Your Birth Year"
        return;
    }
    let age = 2026 - birthYear;
    result.textContent = "Your Age is " + age ;
})
