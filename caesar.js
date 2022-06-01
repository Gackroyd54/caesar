//Pegando os input de ichave e ijanel:
var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var chave = document.getElementById("ichave")//chave
var palavra = document.getElementById("ipalavra")//palavra
var chave = document.getElementById("ichave")//chave
var resultado = document.getElementById("resultado")//resultado(A cifra)
var cifra = document.getElementById("código")
var cifra = ''
var novaChave = chave.value

function codificar(){
    for (letrap of palavra.value.toLowerCase()) {
        //console.log(letrap)
            for (letra in alfabeto){
                if(alfabeto[letra]==letrap){
                    if(chave.value>25 ){
                        novaChave = chave.value%26
                    }

                //console.log(Number(letra) + 1)
                //console.log(Number(letra)+Number(chave.value)+1)
                console.log(alfabeto[Number(letra)+Number(novaChave)])
                cifra += alfabeto[Number(letra)+Number(novaChave)]//nova palavra
                
                }
               
        }    
    }
    console.log(cifra)
    result.innerText = cifra
    //
    cifra = ''
    
}
function limpar(){
    palavra.value = ''
    chave.value = ''
    result.innerText = "Cifra"
}

