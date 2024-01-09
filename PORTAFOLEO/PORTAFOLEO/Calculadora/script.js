const select = document.getElementById("select").value;
const num1 = document.getElementById("num1").value;
const num2 = document.getElementById("num2").value;
const resultado = document.getElementById("resultado");

const mostrar = () => {
  const select = document.getElementById("select").value;
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const resultado = document.getElementById("resultado");

  if (select == "suma") {
    const suma = Number(num1) + Number(num2);
    resultado.style.color = "green";
    resultado.style.fontSize = "25px";
    resultado.innerText = `El resultado de la suma es: "${suma}"`;
  } 
  
  else if (select == "resta") {
    const resta = Number(num1) - Number(num2);
    resultado.style.color = "red";
    resultado.style.fontSize = "25px";
    resultado.innerText = `El resultado de la resta es: "${resta}"`;
  } 
  
  else if (select == "multiplicacion") {
    const multiplicacion = Number(num1) * Number(num2);
    resultado.style.color = "orange";
    resultado.style.fontSize = "25px";
    resultado.innerText = `El resultado de la multiplicacion es: "${multiplicacion}"`;
  }

  else if (select == "division"){
    const division = Number(num1) / Number(num2);
    resultado.style.color = "blue";
    resultado.style.fontSize = "25px"
    resultado.innerText = `El resultado de la division es: "${division}"`
  }

  else if (select == "potencia"){
    const potencia = Number(num1) ** Number(num2);
    resultado.style.color = "brown";
    resultado.style.fontSize = "25px"
    resultado.innerText = `El resultado de la potencia es: ${potencia}`
  }
}