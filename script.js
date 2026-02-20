// Esperar a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function() {

    // Cambiar color del título al hacer clic
    const titulo = document.querySelector("h1");
    titulo.addEventListener("click", function() {
        titulo.style.color = "blue";
        alert("Has hecho clic en el título: Tim Berners-Lee");
    });

    // Crear un botón dinámicamente
    const boton = document.createElement("button");
    boton.textContent = "Mostrar información importante";
    document.body.appendChild(boton);

    boton.addEventListener("click", function() {
        alert("Tim Berners-Lee es considerado el padre de la Web y creador del protocolo HTTP y el lenguaje HTML.");
    });

    // Resaltar palabras clave automáticamente
    const palabrasClave = ["HTTP", "HTML", "CERN", "MIT", "W3C"];
    const strongElements = document.querySelectorAll("strong");

    strongElements.forEach(function(elemento) {
        if (palabrasClave.includes(elemento.textContent.trim())) {
            elemento.style.backgroundColor = "yellow";
        }
    });

    // Mostrar mensaje al final de la página
    const mensajeFinal = document.createElement("p");
    mensajeFinal.textContent = "Página interactiva creada con JavaScript.";
    mensajeFinal.style.fontWeight = "bold";
    mensajeFinal.style.marginTop = "20px";
    document.body.appendChild(mensajeFinal);

});