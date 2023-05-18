
let operationChoisie;
let nbr1;
let nbr2;
let resultat;


function choisirOperation()
{
    let operation = prompt("quelle opération voulez-vous faire ? \n 1- Addition  \n 2- Soustraction  \n 3- Multiplication \n 4- Division");
    return operation;
}

function addition(nombreA,nombreB) {
    resulat =  nombreA + nombreB;
    return resulat;
    //alert("le résultat de l'addition est : " + resulatAddition);
}

function soustraction(nombreA,nombreB) {
    resulat =  nombreA - nombreB;
    return resulat;
    //alert("le résultat de la  soustraction est : " + resulat);
}
function multiplication(nombreA,nombreB) {
    resulat =  nombreA * nombreB;
    return resulat;
    //alert("le résultat de la multimplication est : " + resulat);
}
function division(nombreA,nombreB) {
    
        if (nombreB == 0) {
            throw new Error("vous ne pouvez pas diviser par 0 !!! ");
        }
        resultat =  nombreA / nombreB;
        return resultat;
  
   }




do {
    operationChoisie = choisirOperation(); 
     
} while (operationChoisie != '1' && operationChoisie != '2' && operationChoisie != '3' && operationChoisie != '4');


while (isNaN(nbr1)  || isNaN(nbr2)) {

    nbr1 = prompt("nombre 1 ?");
    nbr2 = prompt("nombre 2 ?");
    nbr1 = parseFloat(nbr1);
    nbr2 = parseFloat(nbr2);
    //  alert (typeof nbr1 + " = nbr1   nbr2= "+ typeof nbr2);
}



try {
    switch (operationChoisie) {
        case '1':
            resultat = addition(nbr1,nbr2);
            break;
        case '2':
            resultat = soustraction(nbr1,nbr2);
            break;
        case '3':
            resultat = multiplication(nbr1,nbr2);
            break;
        case '4':
            resultat = division(nbr1,nbr2);
            break;
    
        default:
            throw new Error("Une erreur est servenue !!!")   
            
    }
    alert("le résultat de l'opération : " + operationChoisie + "est = " + resultat);
} catch (error) {
    alert(error);
}


afficherResultat(resultat,operationChoisie);