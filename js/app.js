import { getNotas } from "./api.js";
import { añadirNota } from "./index.js";
import { postNota } from "./api.js";
import { cantNotas } from "./index.js";
import { deleteNota } from "./api.js";

//FUNCION IFE (ENCAPSULADA) - CARGAR TODAS LAS NOTAS AL INICIAR PAGINA
(function(){

    document.addEventListener('DOMContentLoaded', mostrarNotas);

    async function mostrarNotas(){
        
        const arrayNotas = await getNotas();

        arrayNotas.forEach(nota => {

            añadirNota(nota);

        });
        
        arrayNotas.textContent = arrayNotas.length + 'notas';
        
    }
})();

//FUNCION DE CARGAR UNA NUEVA NOTA AL JSON
(function(){

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
            fecha : 'hoy'
        }

        return nota;
    }

})();