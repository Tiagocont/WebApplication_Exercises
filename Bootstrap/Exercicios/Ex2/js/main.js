function calc() {
    var produto = parseInt(document.getElementById("Prod").value);
    var forma = parseInt(document.getElementById("FP").value);
    var Et = 0;
    var Dsc = 0;
    var Jrs = 0;
    var Tot = 0;
    var Parc = 0;

    if(produto == 1){
        Et = 50;

        if(forma ==1){
            Dsc = 0.9;
            Tot = Et * Dsc;
            Parc = Tot;
        }
        else if(forma ==2){
            Dsc = 0.85;
            Tot = Et * Dsc;
            Parc = Tot;
        }
        else if(forma ==3){
            Dsc = 0;
            Tot = Et;
            Parc = Tot/2;
        }
        else if(forma ==4){
            Dsc = 0;
            Jrs = 1.1;
            Tot = Et * Jrs;
            Parc = Tot/3;
        }

    }
    else if(produto ==2){
        Et = 45;
        switch(forma){
            case 1:
                Dsc = 0.9;
                Tot = Et * Dsc;
                break;
            case 2:
                Dsc = 0.85;
                Tot = Et * Dsc;
                break;
            case 3: 
                Dsc = 0;
                Tot= Et;
                break;
            case 4:
                Jrs = 1.1;
                Tot = Et * Jrs;
                break;
        }
    }
    else if(produto ==3){
        Et=40;
        switch(forma){
            case 1:
                Tot = Et * 0.9;
                break;
            case 2:
                Tot = Et * 0.85;
                break;
            case 3:
                Dsc = 0; 
                Tot= Et;
                break;
            case 4: 
                Tot = Et * 1.1;
                break;
        }
    }
    document.getElementById("PEt").value = Et;
    if(Dsc!= 0){
        document.getElementById("Dsc").value = 100 - Dsc*100;   
    }
    else{
        document.getElementById("Dsc").value = "0";   
    }
    document.getElementById("VT").value = Tot;
    document.getElementById("VP").value = Parc;            

}

function limp(){
    document.getElementById("Prod").value = "";
    document.getElementById("VT").value = "";
    document.getElementById("Dsc").value = "";
    document.getElementById("VP").value = "";
    document.getElementById("FP").value = "";
    document.getElementById("PEt").value = "";
}

