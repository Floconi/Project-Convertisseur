var convertion_reussie;
convertion_reussie = false;
var virgule = false;
function Convertir() {
    var input_euros = document.getElementById("montant_a_convertir_euro");
    var input_francs = document.getElementById("montant_a_convertir_franc");
    
    
    if ((input_francs.value == '') && (input_euros.value == '')){
        console.log("valeur null")
        alert("Veuillez rentrer une valeur pour que le convertiseur fonctionne")
    }else{ 
        
        if (convertion_reussie == true){
            alert("Vous avez déja converti. Veuillez appuyer sur reset pour reesayer.")
        }
        else{
             var prix_euros ;
            var prix_francs ;
            const conversion_euro_franc = 6.55957;
        
            
            console.log(input_francs.value)
            if  (input_francs.value == '') {
                input_euros.value = remplacer_virgule_par_point(input_euros.value)
                console.log(input_euros.value)
                if (isNaN(input_euros.value) == true){
                    alert("La valeur entré n'est pas un nombre")
                    reset()
                }
                else {
                    
                    prix_francs = input_euros.value * conversion_euro_franc;
                    prix_francs = Number.parseFloat(prix_francs).toFixed(2);
                    /*if (virgule == true){
                        input_francs.value =  remplacer_point_par_virgule(input_francs.value)
                        input_euros.value = remplacer_point_par_virgule(input_euros.value)
                        virgule = false
                    }*/
                    input_euros.value = input_euros.value+" €"
                    input_francs.value = prix_francs+" ₣";
                    input_francs.disabled = true ;
                    input_euros.disabled =  true ;
                    convertion_reussie = true;
                }
            }
            else {
                input_francs.value = remplacer_virgule_par_point(input_francs.value)
                if (isNaN(input_francs.value) == true){
                    alert("La valeur entré n'est pas un nombre. Veuillez appuyer sur reset pour reesayer")
                    reset()
                }
                else{
                    input_francs.value = remplacer_virgule_par_point(input_francs.value)
                    prix_euros = input_francs.value / conversion_euro_franc;
                    prix_euros = Number.parseFloat(prix_euros).toFixed(2);
                    /*if (virgule == true){
                        input_francs.value =  remplacer_point_par_virgule(input_francs.value)
                        input_euros.value = remplacer_point_par_virgule(input_euros.value)
                        virgule = false
                    }*/
                    input_francs.value = input_francs.value+" ₣";
                    input_euros.value =  prix_euros+" €"; 
                    input_francs.disabled = true ;
                    input_euros.disabled =  true ;
                    convertion_reussie = true;
                }
            } 

            
           
        }
       
    }
}

function reset(){
    var input_euros = document.getElementById("montant_a_convertir_euro");
    var input_francs = document.getElementById("montant_a_convertir_franc");
    var boutton = document.getElementById("bouton")
    input_euros.value = ''
    input_francs.value = '';
    input_francs.disabled = false ;
    input_euros.disabled = false ; 
    input_euros.placeholder = "Entrer le montant en euros"
    input_francs.placeholder = "Entrer le montant en franc"
    fleche_droite.style.display = "none";
    fleche_gauche.style.display = "none";
    convertion_reussie = false

}

function gestionsaisie() {
    var input_euros = document.getElementById("montant_a_convertir_euro");
    var input_francs = document.getElementById("montant_a_convertir_franc"); 
    var fleche_droite = document.getElementById("fleche_droite")
    var fleche_gauche = document.getElementById("fleche_gauche")
    console.log(input_euros.value)
    console.log(input_francs.value)

    if (input_euros.value != ''){
        console.log("contenu dans euros")

        input_francs.disabled = true ;
        input_francs.placeholder = "Resultat";
        fleche_droite.style.display = "block";
                   
    
    }
    if (input_francs.value != ''){
        console.log("contenu dans franc")
        input_euros.disabled =  true ;
        input_euros.placeholder = "Resultat"; 
        fleche_gauche.style.display = "block";
    }
    if ((input_francs.value == '') && (input_euros.value == '')){
        input_euros.disabled = false ;
        input_francs.disabled = false ;
        input_euros.placeholder = "Entrer le montant en euros"
        input_francs.placeholder = "Entrer le montant en francs"
        fleche_droite.style.display = "none";
        fleche_gauche.style.display = "none";
    }

}
function remplacer_virgule_par_point(decimal) {
    virgule = true;
	return parseFloat((decimal+"").replace(",","."));
}
function remplacer_point_par_virgule(decimal) {
    virgule = false;
	return parseFloat((decimal+"").replace(".",","));
}

/*if (type_de_conversion==1){
    document.writeln("<h1>")
    document.writeln("Convertiseur Euros vers francs")
    document.writeln("</h1>")
    prix_euro = prompt("Quel est le motant en euros à convertir ?",10);
    prix_franc = prix_euro * conversion_euro_franc;
    document.writeln("La somme converti de "+prix_euro+" euros est de : "+prix_franc+" francs" )
}
else{
    if(type_de_conversion==2){
        document.writeln("<h1>")
        document.writeln("Convertiseur Franc vers Euros")
        document.writeln("</h1>")
        prix_franc = prompt("Quel est le montant en franc à convertir ?",10)
        prix_euro = prix_franc / conversion_euro_franc;
        document.writeln("La somme converti de "+prix_franc+" francs est de : "+prix_euro+" euros" ) 
    }
    else{
        
        document.writeln("Vous avez rentré "+type_de_conversion+" c'est une valeur incorecte. Il faut saisir soit 1[euros -> franc] ou 2 [francs -> euros]. Veuillez actualiser la page pour recommencer")
    }  
}
    return 
}
*/

