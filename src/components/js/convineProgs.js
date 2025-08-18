export function Reobjet(vect,todo) {
    let newVect = todo;
    for (let i = 0; i < vect.length; i++) {
        newVect.push(vect[i]);
    }
    return newVect;
}