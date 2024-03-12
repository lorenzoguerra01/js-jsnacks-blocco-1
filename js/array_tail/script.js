// Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Bonus:
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// Suggerimenti:
// Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array

let elBtnTail = document.getElementById("btn-tail");

elBtnTail.addEventListener("click", function () {
    reply.innerHTML = ""
    reply.className = ""
    let arrayTail = [];
    let elements = parseInt(prompt("Quanti elementi dovrà contenere l'array"))
    let printElemnts = parseInt(prompt("Quanti elementi vorresti stampare (Verranno stampati a paritre dall'ultimo"))
    if (elements >= printElemnts) {
        console.log("elements " + elements);
        for (let i = 0; i < elements; i++) {
            arrayTail.push(getRndInteger(1, 100))
            console.log("array numbers " + arrayTail[i]);
        }
        console.log("reply " + reply);
        for (let i = 1; i <= printElemnts; i++) {
            reply.innerHTML += ` ${arrayTail[elements - i] + ", "}`
        }
    } else {
        reply.innerHTML = "Attenzione, il numero di elementi da stampare non può superare il numero di elementi generati"
        reply.className = "text-danger"
    }

})
