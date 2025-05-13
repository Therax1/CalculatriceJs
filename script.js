// Version 1.0.0

function addition(a, b){
    return a + b;
}

function soustraction(a, b){
    return a - b;
}

function division(a, b){
    return a / b;
}

function multiplication(a, b){
    return a * b;
}

function demanderNombre(nb){
    return parseFloat(prompt(nb))
}

function operateur(op){
    return prompt(op);
}

function calculer(a, op, b){
    switch(op) {
        case '+':
            return addition(a, b);
        case '-':
            return soustraction(a, b);
        case '/': 
            return division(a, b);
        case '*':
            return multiplication(a, b);
        default: 
            alert("Votre opération ne fait pas partir des opérateurs de l'application ou est Invalide")
            return null;
    }
}

function lancerCalculatrice(){
    const nb1 = demanderNombre("Entrez le premier nombre :");

    const op = operateur("Entrez l'opérateur : ")

    const nb2 = demanderNombre ("Entrez le deuxième nombre :")

    const calcul = calculer(nb1, op, nb2);

    if(calcul === null){
        console.log("Erreur !")
        return;
    }
    alert(`Résultat : ${calcul}`)
}