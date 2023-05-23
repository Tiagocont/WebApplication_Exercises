function calc() {
    var n1 = parseInt(document.getElementById("idn1").value);
    var soma = 0;

    if(n1%2==0){
        soma = n1+ 5;
    }
    else{
        soma = n1+ 8;
    }

    document.getElementById("idR").value = soma;
    //5 par e 8 impar

    
}

function limp(){
    document.getElementById("idn1").value = "";
    document.getElementById("idR").value = "";
}