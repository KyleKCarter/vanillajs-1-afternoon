const idInput = document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");

// console.log(idInput);
// console.log(colorInput);

function setCard(){
    let card = document.getElementById(idInput.value);
    // console.log(card);
    card.style.color = colorInput.value;
}

function reset(){
    document.getElementById("reset");
    document.location.href = "";
}