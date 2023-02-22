function clicar () {

var n= window.document.getElementById('nota1')
var nota1= Number(n.value)
var n2= window.document.getElementById('nota2')
var nota2= Number(n2.value)
var soma = (nota1 + nota2) / 2
var res = window.document.getElementById('res')
var media =window.document.getElementById('media')
var img= window.document.getElementById('imagem')

media.innerHTML= `Sua média foi: ${soma}`

if (soma>=7) {

    img.src="aprovado.png"
    

res.innerHTML="<br> Você está aprovado"
res.style.color="green"
} else {

    img.src="reprovado.png"
    res.innerHTML="<br> Você está reprovado"
    res.style.color="red"

}
}