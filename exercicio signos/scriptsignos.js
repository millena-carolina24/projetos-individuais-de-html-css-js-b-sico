function clicar() {




var d = window.document.getElementById("dia")
var dia = Number(d.value)
var m = window.document.getElementById("mes")
var mes = Number(m.value)
var foto= window.document.getElementById("imagem")
var titulo= window.document.getElementById("titulo")
var texto= window.document.getElementById('texto')


if (dia<=21 && mes==1) {
    titulo.innerHTML="Capricórnio"
    foto.src='capricornio.png'
}

else  if (dia<=21 && mes==2) {
    foto.src="aquario.png"
    titulo.innerHTML="Aquário"
    texto.innerHTML=" <p> Inovador, racional, rápido e imprevisível, ele ri da cara das regras e detesta a sensação de estar preso a algo, seja um lugar, um ideal ou uma situação. As pessoas que têm ascendente nesse signo costumam curtir um visual bem inesperado, e quanto mais chocadas as pessoas à sua volta, melhor.</p>"
    


} else if (dia <= 20 && mes==3) {

    foto.src="peixes.png"
    titulo.innerHTML="Peixes"
    texto.innerHTML="<p>Sempre conectados com sua intuição, piscianos e piscianas costumam captar as coisas no ar, muitas vezes são pessoas bem discretas e observadoras que conseguem perceber o mundo através da observação de si.</p>"

} else if (dia<=20 && mes==4) {
    foto.src="aries.png"
    titulo.innerHTML="Aries"
    
 } else if (dia<=21 && mes==5) {
    foto.src="touro.png"
    titulo.innerHTML="Touro" 

 } else if (dia<=21 && mes==6) {
    foto.src="gemeos.png"
    titulo.innerHTML="Gêmeos"
 } else if (dia<=21 && mes==7) {
    foto.src="cancer.png"
    titulo.innerHTML="Câncer"
 } else if (dia<=22 && mes==8) {
    foto.src="leao.png"    
    titulo.innerHTML="Leão"
    } else if (dia<=23 && mes==9) {
        foto.src="virgem.png"
        titulo.innerHTML="Virgem"
    } else if (dia<=23 && mes==10) {
        foto.src="libra.png"
        titulo.innerHTML="Libra"
    } else if (dia<=23 && mes==11) {
        foto.src="escorpiao.png"
        titulo.innerHTML="Escorpião"
        texto.innerHTML="<p>A intensidade, típica do signo, também costuma ser bem evidente. Costuma viver as emoções com muita intensidade, pode ter posturas apegadas, rancorosas e um pouco autodestrutivas.</p>"
    } else if (dia<=23 && mes==12) {
        foto.src="sagitario.png"
        titulo.innerHTML="Sagitário"
        
    }    


}
        
        
        
        



    
    
