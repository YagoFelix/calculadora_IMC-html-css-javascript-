
const calcular = document.getElementById('calcular');


function imc (){
    const nome = document.getElementById('nome').value; //queremos o valor dentro da caixinha ( nome.value )
    const altura = document.getElementById('altura').value; //queremos o valor dentro da caixinha ( altura.value )
    const peso = document.getElementById('peso').value; //queremos o valor dentro da caixinha ( peso.value )
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') { // se nome diferente de vazio
        // alert ('Dados corretos')
        const valorIMC = (peso / (altura * altura)).toFixed(1); // arredondar, para tirar os decimais

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35){
            classificacao = 'com obesidade grau I';
        } else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }


        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; // como estamos usando variáveis, para não ficar concatenando, vamos usar template string, que é o acento grave(dentro dele podemos incluir variáveis)
// cifrão e abrir chaves, serve para chamar a variável em template string

    } else {
        // alert ('Preencha todos os campos!')
        resultado.textContent = "Preencha todos os campos!" // vai aparecer a string dentro da div
    };

}

calcular.addEventListener('click', imc);