export function Reobjet(vect,todo) {
    let newVect = todo;
    for (let i = 0; i < vect.length; i++) {
        newVect.push(vect[i]);
    }
    return newVect;
}

export function Filtro_lenguaje(tipo,lenguajes) {
        let Filtrado = [];
            for (let i = 0; i < lenguajes.length; i++) {
                if (tipo == lenguajes[i].tipo) {
                    Filtrado.push( {lenguaje: lenguajes[i].lenguaje,tipo:lenguajes[i].tipo,img:lenguajes[i].img});    
                }
            }
    return Filtrado;
}