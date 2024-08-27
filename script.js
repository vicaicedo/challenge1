const botonEncriptar = document.querySelector(".botonEncriptar");
const textoEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".textoAviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".contenedorTarjeta");
const botonCopiar = document.querySelector(".botonCopiar");
const botonDesencriptar = document.querySelector(".botonDesencriptar");

const mostrarAviso = (mensaje) => {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;

    setTimeout(() => {
        aviso.removeAttribute("style");
    }, 1500);
};

const validarTexto = (texto) => {
    const txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]><:"`;,\u0300-\u036f']/g, "");
    
    if (texto === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
        return false;
    } else if (texto !== txt) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
        return false;
    } else if (texto !== texto.toLowerCase()) {
        mostrarAviso("El texto debe ser todo en minúscula");
        return false;
    }

    return true;
};

const encriptarTexto = (texto) => {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
};

const desencriptarTexto = (texto) => {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
};

botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = textoEncriptar.value;

    if (validarTexto(texto)) {
        texto = encriptarTexto(texto);
        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

botonDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = textoEncriptar.value;

    if (validarTexto(texto)) {
        texto = desencriptarTexto(texto);
        respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});