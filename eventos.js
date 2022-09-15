calcular_imc(186, 85)

let altura;
let peso;

function calcular_imc(altura, peso){
    let altura_metros = (altura / 100);
    let altura_quadrado = (altura_metros * altura_metros);
    let imc = peso / altura_quadrado;
    
    if(imc <= 18.5){
        IMC.innerHTML = `Abaixo do peso`
    }

    if(imc >= 18.6 && imc < 25){
        IMC.innerHTML = `Peso ideal`
    }
    
    if(imc >= 25 && imc < 30){
        IMC.innerHTML = `Sobrepeso`
    }   
    
    if(imc >= 30 && imc < 35){
        IMC.innerHTML = `Obeso I`
    }
    
    if(imc >= 35 && imc < 40){
        IMC.innerHTML = `Obeso II`
    }
    
    if(imc >= 40){
        IMC.innerHTML = `Obeso III`
    }
}

