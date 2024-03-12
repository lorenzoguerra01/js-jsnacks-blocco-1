// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
let elBtnBonus = document.getElementById("btn-bonus");
elBtnBonus.addEventListener("click", function () {

    let array1 = [];
    let array2 = [];
    let tempArray1 = document.createElement("div")
    let tempArray2 = document.createElement("div")
    let elements1 = parseInt(prompt("Quanti elementi dovrà contenere il primo array"))
    let elements2 = parseInt(prompt("Quanti elementi dovrà contenere il secondo array"))

    if (elements1 > elements2) {
        for (let i = 0; i < elements1; i++) {
            array1.push(getRndInteger(1, 100))
            array2.push(getRndInteger(1, 100))
            console.log("array 1 " + array1[i]);
            console.log("array 2 " + array2[i]);
            tempArray1.append(array1[i] + ", ")
            tempArray2.append(array2[i] + ", ")
            console.log(tempArray1);
            console.log(tempArray2);
        }
        reply.innerHTML = ` 
        <div>PRIMO ARRAY: ${tempArray1.innerHTML}<div/>
        <div>SECONDO ARRAY(con elementi aggiunti): ${tempArray2.innerHTML}<div/>
        `

    } else {
        for (let i = 0; i < elements2; i++) {
            array1.push(getRndInteger(1, 100))
            array2.push(getRndInteger(1, 100))
            console.log("array 1 " + array1[i]);
            console.log("array 2" + array2[i]);
            tempArray1.append(array1[i] + ", ")
            tempArray2.append(array2[i] + ", ")
            console.log(tempArray1);
            console.log(tempArray2);
        }
        reply.innerHTML = ` 
        <div>PRIMO ARRAY(con elementi aggiunti): ${tempArray1.innerHTML}<div/>
        <div>SECONDO ARRAY: ${tempArray2.innerHTML}<div/>
        `
    }
})