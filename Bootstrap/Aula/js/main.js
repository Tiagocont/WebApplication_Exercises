function calc() {
    var n1 = parseInt(document.getElementById("idn1").value);
    var n2 = parseInt(document.getElementById("idn2").value);

    var soma = n1+ n2;

    document.getElementById("idR").value = soma;
    
}

function limp(){
    document.getElementById("idn1").value = "";
    document.getElementById("idn2").value = "";
    document.getElementById("idR").value = "";
}