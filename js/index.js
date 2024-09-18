import { postNota } from "./api.js";
import { deleteNota } from "./api.js";

export var cantNotas = 0;
const textoNotas = document.getElementById('cantNotas');


//BOTON NUEVA NOTA
 const btnAñadirNota = document.getElementById('nuevaNota');
 btnAñadirNota.addEventListener('click', () =>{

    const pantallaNuevaNota = crearPantallaUnaNota();
    
        const btnListo = document.getElementById('btnListo');
        btnListo.addEventListener('click', addNota);

        async function addNota(e){
            e.preventDefault();

            const nota = crearNota();

            postNota(nota);
         }

        const crearNota = () => {
            const titulo = document.getElementById('titulo');
            const cuerpo = document.getElementById('cuerpo');

            const nota = {
                titulo : titulo.value,
                cuerpo : cuerpo.value,
                fecha: new Date().toLocaleDateString() 
              }

            return nota;
          }

 });

export function añadirNota(nuevaNota) {

    const divNuevaNota = document.createElement('div');
    divNuevaNota.classList.add('nota');

    divNuevaNota.innerHTML = `
        <ul>
            <li>${nuevaNota.titulo}</li>
            <li>${nuevaNota.fecha} ${nuevaNota.cuerpo.length > 40 ? nuevaNota.cuerpo.substring(0, 40) + '...' : nuevaNota.cuerpo}</li>
            <div class="linea-separacion"></div>
        </ul>
    `;

    divNuevaNota.addEventListener('click', ()=>{
        const pantallaVerNota = crearPantallaUnaNota();

        const titulo = document.getElementById('titulo');
        const cuerpo = document.getElementById('cuerpo');
        titulo.textContent = nuevaNota.titulo;
        cuerpo.textContent = nuevaNota.cuerpo;

        const btnListo = document.getElementById('btnListo');
        btnListo.addEventListener('click', ()=>{
            console.log('Aca va la funcion de actualizar la tarea.');

            //pantallaVerNota.remove()
        });
    })

    const containerNotas = document.getElementById('notas');
    containerNotas.appendChild(divNuevaNota);
}

function crearPantallaUnaNota(){
    const pantallaNuevaNota = document.createElement('div');
    pantallaNuevaNota.classList.add('pantalla');

    pantallaNuevaNota.innerHTML =` 
        <header class="header">
        <button id="btnNotas"><i class="fas fa-chevron-left"></i>Notas</button>
        <button id="btnListo">Listo</button>
        </header>
        <textarea id="titulo"></textarea>
        <textarea id="cuerpo"></textarea>`;

        const body = document.getElementById('bodyPrincipal');
        body.appendChild(pantallaNuevaNota);

        const btnNotas = pantallaNuevaNota.querySelector('#btnNotas');
           btnNotas.addEventListener('click', () =>{
               pantallaNuevaNota.remove();
           });

return pantallaNuevaNota;
}

//SCROLL NOTAS
const containerNotas = document.getElementById('notas');
let scrollTimeout;
containerNotas.addEventListener('scroll', () => {
    // Añadir la clase 'scrolling' para mostrar el scroll
    containerNotas.classList.add('scrolling');
    
    // Limpiar cualquier temporizador previo
    clearTimeout(scrollTimeout);
    
    // Ocultar el scroll después de 1 segundo de inactividad
    scrollTimeout = setTimeout(() => {
        containerNotas.classList.remove('scrolling');
    }, 1000);
});

//PRUEBA ELIMINACION.
const btnOpciones = document.getElementById('opciones');
btnOpciones.addEventListener('click', ()=>{
    deleteNota();
})