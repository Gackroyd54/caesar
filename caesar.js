var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//Pegando os input de ichave e ijanel:
var chave = document.getElementById("ichave")//chave
var palavra = document.getElementById("ipalavra")//palavra
var res = document.getElementById("resultado")//resultado(A cifra)
var resposta = '';

function codificar(){
    for (letrap of palavra.value) {
        //console.log(letrap)
        for(letraa in alfabeto) {
            if (alfabeto[letraa] == letrap){
                //console.log(Number(letraa)+1)
                //console.log(Number(letraa)+1+Number(chave.value))
                console.log(alfabeto[Number(letraa)+Number(chave.value)])
                 resposta += alfabeto[Number(letraa)+Number(chave.value)]
                 console.log(resposta)
                 
            }
        }
    }
    chave.value = ''
    palavra.value = ''
    
}

