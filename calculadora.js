var res = document.getElementById("resultado")
//res.innerHTML = '2+5=7'
function insert(a){
    res.innerHTML += a
}
function apagar(){
    res.innerHTML=''
}
function back(){
    var resultado = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = resultado.substring(0,res.length-1)
}
function calcular(){
    res.innerHTML= eval(res.innerHTML)
}