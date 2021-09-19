var checkbox = $("#Checkbox input[type='checkbox']");

checkbox.change(function(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        alert("Caixa Marcada")
    } else {
        alert("Caixa Desmarcada")
    }
});

function participar(){
    window.alert('Parabéns! Você já está participando do evento!');
}