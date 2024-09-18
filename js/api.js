//ARCHIVO JS DONDE VOY A GUARDAR TODAS MIS PETICIONES
const url = 'http://localhost:4000/notas';

export async function getNotas(){
    try {
        const resultado = await fetch(url, {method : 'GET'});
        const notas = await resultado.json();

        return notas;
    } catch (error) {
        console.log(error);
    }
}

export async function postNota(nuevaNota){
    try {
        await fetch(url,
            {
                method : 'POST',
                body : JSON.stringify(nuevaNota),
                headers : {'Content-Type' : 'application/json'}
            }
        )
    } catch (error) {
        console.log(error);
    }
}

export async function deleteNota(idNota){
    try {
        
        fetch(`${url}/${idNota}`, { method: 'DELETE' });

    } catch (error) {
        console.log(error);
    }
}