function formCriarEvento(){
    window.alert("Evento-Criado")
    const nome = document.getElementById("container").style.display = "none";
}

function pegarData(){
    const data = document.getElementById("data").value;
    const ano = data.substring(0, 4);
    const idade = new Date().getFullYear() - parseInt(ano); 
    if(idade < 18){
        window.alert(`Você não tem idade para participar do evento! Você tem ${idade} anos.`);
    }else if(idade > 18){
        window.alert(`Cadasto concluído com sucesso! Você tem ${idade} anos.`)
    }
}




