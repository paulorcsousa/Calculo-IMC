function calcularImc(){
    let altura = document.getElementById('altura').value;
    let peso   = document.getElementById('peso').value;
    let result = document.getElementById('result');
    let imc    = document.getElementById('imc');
    const resultBox = document.getElementsByClassName('result')[0];
    
    function atualizaClass(classValue){
        resultBox.className = 'result',
        resultBox.classList.add(classValue)
    }


    // substitui , por ponto. 
    altura = altura.replace(",",".");
    peso   = peso.replace(",",".");

    let calculo = peso / (altura * altura);

    calculo = calculo.toFixed(2);

    // mostrar na tela o imc na tela
  
    result.innerHTML = calculo.replace('.',',') + '<br />';

    
    if (calculo < 18.5) 
        imc.innerHTML = 'Seu peso está abaixo do ideal',
        atualizaClass('abaixo');
    else if (calculo >= 18.5 && calculo < 25) 
        imc.innerHTML = 'Seu peso é ideal',
        atualizaClass('ideal');
    else if (calculo >= 25 && calculo < 30 ) 
        imc.innerHTML = 'Seu peso está acima do ideal',
        atualizaClass('sobrepeso');
    else if (calculo >= 30 && calculo <= 40 ) 
        imc.innerHTML = 'Seu peso é considerado como obesidade',
        atualizaClass('obesidade');
    else 
        imc.innerHTML = 'Seu peso é considerado com obesidade grave',
        atualizaClass('grave-obesidade');
}

function verificarInput(event) {
    var letra = event.key;

    if (isNaN(letra) && letra != ',' && letra != '.' && letra != 'Tab' && letra != 'Enter' && letra != 'Backspace' && letra != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight') {
        event.preventDefault();
        document.getElementById('altura').value = '';
        document.getElementById('peso').value = '';
    }
}