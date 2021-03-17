actualizar();

function actualizar() {
    if (sessionStorage.contador) {
        sessionStorage.contador = Number(sessionStorage.contador) + 1;
    } else {
        sessionStorage.setItem("contador", 1);
    }
    $("#alerta").text('Has visitado ' + sessionStorage.contador + ' páginas.')
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
$("#bc").text("Inicio");