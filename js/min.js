const togglePassword = document.querySelector("#toggle-password");
const password = document.querySelector("#password");
let a = 12;

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});