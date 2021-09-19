// Autor: Davyd Cristiano | data: 19/09/2021 | Senai Front-end //

//Variáveis//
var dataEvento = prompt("Por favor! Informe a data do evento no formato DD/MM/AAAA");
var qtdParts = 100;
dataEvento = dataEvento.replace('/','');
const data = new Date();
const hoje = (data.getDate() + '-' + (data.getMonth() + 1)  + '-' + data.getFullYear()).split("-");
if(dataEvento >= hoje){
    var idade = prompt("Por favor! Qual é a sua idade ?");
    if(idade < 18){
        window.alert(`Você não tem idade para participar do evento! Você tem ${idade} anos.`);
    }else if(idade > 18 && qtdParts < 100){
        window.alert(`Cadasto concluído com sucesso! Você tem ${idade} anos.`)
    }else{
        window.alert(`Desculpe-me! A quantidade de participantes já foi atingida.`)
    }
}
else{
    window.alert(`Desculpe-me! Data Inválida`)
}