// calcular

var Calcula = document.getElementById('calcular')
Calcula.addEventListener('click', multiplicar)

function multiplicar() {


    // calculo por dia
    var pasedia = document.getElementById('pase_dia').value
    pasedia = pasedia * 30
    pasedia = parseInt(pasedia)

    var dia = 'Total por dia: $' + pasedia
    console.log(dia)


    // calculo pase completo
    var pasecompleto = document.getElementById("pase_completo").value
    pasecompleto = pasecompleto * 50
    pasecompleto = parseInt(pasecompleto)

    var completo2 = 'Total por pase completo: $' + pasecompleto
    console.log(completo2)


    // calculo dos dias
    var pasedosdias = document.getElementById("pase_dosdias").value
    pasedosdias = pasedosdias * 45
    pasedosdias = parseInt(pasedosdias)

    var dosdias = 'Total por dos dias: $' + pasedosdias
    console.log(dosdias)

    // calculo camisa
    var camisa = document.getElementById("camisa_evento").value
    camisa = camisa * 10
    camisa = parseInt(camisa)

    var camis

    if (camisa > 0) {
        camisa = (camisa * 7) / 100
        camis = 'Total por camisa + descuento del %7 : $' + camisa
    } else {
        camis = 'Usted no seleccionó camisas.'
    }

    console.log(camis)


    // calculo etiquetas 
    var etiquetas = document.getElementById("etiquetas").value
    etiquetas = etiquetas * 45
    etiquetas = parseInt(etiquetas)

    var etiqueta = 'Total por etiquetas: $' + etiquetas
    console.log(etiqueta)

    // regalos
    var regalo = document.getElementById('regalo').value
    regalo = parseInt(regalo)

    var regalos

    if (regalo == 1) {
        regalos = 'Elegiste como regalo: Etiquetas '

    } else if (regalo == 2) {
        regalos = 'Elegiste como regalo: Pulsera '
    } else if (regalo == 3) {
        regalos = 'Elegiste como regalo: Pluma '
    } else
        regalos = " NO elegiste regalos."
    console.log(regalos)



    // imprime 
    var calcular = document.getElementById("lista-productos")
    calcular.textContent = dia + completo2 + dosdias + regalos + camis + etiqueta


    var total = document.getElementById("suma-total")
    total.textContent = etiquetas + camisa + pasedosdias + pasecompleto + pasedia



}