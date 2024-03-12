// Abbiamo un frigorifero pieno di frutta:
// 'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
// C'è anche una pesca sul tavolo, la mettiamo nel frigo.
// Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
// Suggerimenti/Indicazioni:
// Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.
let elBtnList = document.getElementById("btn-list");

elBtnList.addEventListener("click", function () {
    let fruitList = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
    fruitList.push("pesca");
    let fruit = (prompt("Quale frutto vuoi usare per il cocktail?"));
    let found = false;
    if (isNaN(fruit)) {
        for (let i = 0; i < fruitList.length; i++) {
            if (fruit === fruitList[i]) {
                found = true
            }
        }
        if (found) {
            reply.innerHTML = "Trovato! Devo solo preparare il cocktail.";
            reply.className = "text-success";
        } else {
            reply.innerHTML = "Oh no, devo andare a comprarlo!";
            reply.className = "text-danger";
        }
        console.log("reply " + reply);    
    }   else {
        reply.innerHTML = "Inserire correttamente i dati"
        reply.className = "text-danger";
    }
    
})
