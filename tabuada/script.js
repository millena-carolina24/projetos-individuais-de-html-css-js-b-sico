function clicar () {

var n = document.getElementById("numero")
var numero= Number(n.value)
var res= document.getElementById("res")

res.innerHTML=""

for (var c=1; c<=10; c++) {

    var resultado = numero * c

    
    res.innerHTML+= ` <br>
    ${numero} x ${c} = ${resultado}`


}









}
