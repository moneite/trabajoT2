actualizar();

function actualizar() {
    if (sessionStorage.contador) {
        sessionStorage.contador = Number(sessionStorage.contador) + 1;
    } else {
        sessionStorage.setItem("contador ", 1);
    }
    $("#alerta ").text('Has visitado ' + sessionStorage.contador + ' páginas.')
}

$("#bc ").text("Inicio ");
$("#bc2 ").text("Actualidad ");