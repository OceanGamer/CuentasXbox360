const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");
const weblink = document.getElementById("final-web-link");

BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    const username = formlog.username.value;
    const password = formlog.password.value;
    const link = formlog.link.value;

    if (username === "OceanGamer" && password === "Mods1008") {
        alert("Logueo Exitoso!");
        window.location.href = link;
    }
    if (username === "Geremy" && password === "Depredador2") {
        alert("Logueo Exitoso!");
        window.location.href = link;
    }
     else if (username === "MoisesGamers19" && password === "TheKing19") {
        alert("Logueo Exitoso!");
        window.location.href = link;
    } else {
        alert("Usuario o Clave Incorrecto!");
        location.reload();
    }
})
