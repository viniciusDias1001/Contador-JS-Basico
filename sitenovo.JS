function clicar(){
    var inicio = document.getElementById('1');
    var passo = document.getElementById('3');
    var fim = document.getElementById('2');
    var res = document.getElementById('res');

    
    if (inicio.value.length == 0  || fim.value.length == 0  || passo.value.length == 0 ) {
        res.innerHTML = "Ai tu me quebra"
        
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(inicio.value);
        var p = Number(passo.value);
        var f = Number(fim.value);
            if(i < f){

                for(var c = i; c <= f; c += p){
                     res.innerHTML += `${c + " "  }`
                     
                    }
                    res.innerHTML += "(Fim.)"
            } else{

                for(var c = i; c >= f; c -= p){
                    res.innerHTML += `${c + " "}`
                }


            }


     }

}   
   

