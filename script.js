
function calcularDolar() {

    let real = document.getElementById("input-real").value 
    let dolar = document.getElementById("input-dolar").value
    let valor = document.getElementById("valor-final-dolar")
    
    let resultado = real / dolar;

    valor.innerHTML = "$ " + resultado;
    
    alert("O resultado é $ " + resultado + " dólares");
   
} 