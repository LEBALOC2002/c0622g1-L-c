function div() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let total = number1 / number2;
    document.getElementById("result").value = total;
}
function can() {
    Number(document.getElementById("number1").value = null);
    Number(document.getElementById("number2").value = null);
    Number(document.getElementById("result").value = null);
    
}