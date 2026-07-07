// ==========================
// CONTADOR DESDE EL 7 DE ABRIL
// ==========================

const fechaInicio = new Date("April 7, 2025 00:00:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

setInterval(actualizarContador,1000);

actualizarContador();


// ==========================
// MÚSICA
// ==========================

const musica = document.getElementById("musica");

function reproducirMusica(){

    if(musica.paused){

        musica.play();

    }else{

        musica.pause();

    }

}


// ==========================
// BOTÓN SORPRESA
// ==========================

function sorpresa(){

    alert("❤️ Gracias por compartir estos meses conmigo.\n\nEres la persona más especial de mi vida.\n\nTe amo muchísimo. ❤️");

}


// ==========================
// CORAZONES FLOTANDO
// ==========================

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML = "❤️";

    corazon.style.left = Math.random()*100 + "vw";

    corazon.style.fontSize = (20 + Math.random()*30) + "px";

    corazon.style.animationDuration = (5 + Math.random()*5) + "s";

    document.body.appendChild(corazon);

    setTimeout(()=>{

        corazon.remove();

    },9000);

}

setInterval(crearCorazon,400);
