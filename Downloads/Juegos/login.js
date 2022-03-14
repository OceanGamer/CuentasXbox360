const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");

BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    const username = formlog.username.value;
    const password = formlog.password.value;

    if (username === "OceanGamer" && password === "Mods1008") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        ErrorMessage.style.opacity = 1;
    }
})
