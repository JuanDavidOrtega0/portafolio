// Ejercicio: Sistema de Gestión de Notas de Clase

// Enunciado:

// Una escuela desea implementar un sistema web para gestionar las notas de clase de los estudiantes. Cada estudiante tiene varias asignaturas y se desea permitir a los docentes marcar las notas de los estudiantes como aprobadas o reprobadas. Implementa una interfaz sencilla donde los docentes puedan visualizar las notas de los estudiantes.

// Requisitos:

// • Crea una tabla ingresando las notas de cada uno de los estudiantes, las asignaturas y sus respectivas notas. 
// • Cada celda de nota debe cambiar el estado de la nota entre "Aprobada" y "Reprobada" por medio de colores. 
// • Implementa una función que calcule automáticamente el promedio de las notas para cada estudiante y lo muestre en una nueva columna de la tabla. 
// • Utiliza las funciones setAttribute, hasAttribute, toggleAttribute y removeAttribute para cambiar el estado de las notas (aprobada/reprobada). 
// • Aplica estilos para resaltar las celdas de notas aprobadas y reprobadas.

const nombre = document.getElementById("nombre").value
const ingles = document.getElementById("ingles").value
const matematicas = document.getElementById("matematicas").value
const etica = document.getElementById("etica").value
const quimica = document.getElementById("quimica").value


const usuarios = [{ 
  nombre: nombre, 
  ingles: ingles,
  matematicas: matematicas,
  etica: etica,
  quimica: quimica }];

const tabla = document.createElement("table");
const encabezados = ["Nombre", "Apellido", "Nota de Inglés", "Nota de Matemáticas", "Nota de Ética", "Nota de Química", "Promedio"];
const encabezadoRow = document.createElement("tr");
        
encabezados.forEach(encabezado => {
  const th = document.createElement("th");
  th.textContent = encabezado;
  encabezadoRow.appendChild(th);
});

tabla.appendChild(encabezadoRow);

const mostrar = () => {

  const nombre = document.getElementById("nombre").value
  const apellido = document.getElementById("apellido").value
  const ingles = document.getElementById("ingles").value
  const matematicas = document.getElementById("matematicas").value
  const etica = document.getElementById("etica").value
  const quimica = document.getElementById("quimica").value
      
  const usuarios = [{ 
    nombre: nombre, 
    apellido: apellido,
    ingles: ingles,
    matematicas: matematicas,
    etica: etica,
    quimica: quimica }];
    
  
  usuarios.forEach(usuario => {

    const promedio = ((Number(ingles) + Number(matematicas) + Number(etica) + Number(quimica)) / 4);
  
    const fila = document.createElement("tr");
        
    const nombreCell = document.createElement("td");
    nombreCell.textContent = usuario.nombre;
    fila.appendChild(nombreCell);

    
    const apellidoCell = document.createElement("td");
    apellidoCell.textContent = usuario.apellido;
    fila.appendChild(apellidoCell)
    
    const inglesCell = document.createElement("td");
    inglesCell.textContent = usuario.ingles;
    fila.appendChild(inglesCell);
    
    if (ingles >= 3 && ingles <= 5) {
      inglesCell.style.backgroundColor = "lightgreen"
    }

    else if (ingles < 3 && ingles >= 0.1) {
      inglesCell.style.backgroundColor = "rgb(232, 63, 63)"
    }

    else {
      inglesCell.style.backgroundColor = "none"
    }

    const matematicasCell = document.createElement("td");
    matematicasCell.textContent = usuario.matematicas;
    fila.appendChild(matematicasCell);

    if (matematicas >= 3 && matematicas <= 5) {
      matematicasCell.style.backgroundColor = "lightgreen"
    }

    else if (matematicas < 3 && matematicas >= 0.1) {
      matematicasCell.style.backgroundColor = "rgb(232, 63, 63)"
    }

    else {
      matematicasCell.style.backgroundColor = "none"
    }

    const eticaCell = document.createElement("td");
    eticaCell.textContent = usuario.etica;
    fila.appendChild(eticaCell);

    if (etica >= 3 && etica <= 5) {
      eticaCell.style.backgroundColor = "lightgreen"
    }

    else if (etica < 3 && etica >= 0.1) {
      eticaCell.style.backgroundColor = "rgb(232, 63, 63)"
    }

    else {
      eticaCell.style.backgroundColor = "none"
    }

    const quimicaCell = document.createElement("td");
    quimicaCell.textContent = usuario.quimica;
    fila.appendChild(quimicaCell);

    if (quimica >= 3 && quimica <= 5) {
      quimicaCell.style.backgroundColor = "lightgreen"
    }

    else if (quimica < 3 && quimica >= 0.1) {
      quimicaCell.style.backgroundColor = "rgb(232, 63, 63)"
    }

    else {
      quimicaCell.style.backgroundColor = "none"
    }

    
    const promedioCell = document.createElement("td");
    promedioCell.textContent = promedio;
    fila.appendChild(promedioCell);

    if (promedio >= 3 && promedio <= 5) {
      promedioCell.style.backgroundColor = "lightgreen"
    }

    else if (promedio < 3 && promedio >= 0.1) {
      promedioCell.style.backgroundColor = "rgb(232, 63, 63)"
    }

    else {
      promedioCell.style.backgroundColor = "none"
    }

    // if(edad <= 13){
    //   promedio = "Niñ@"
    // }
    // else if(edad >= 14 && edad <=17){
    //   promedio = "Adolescente";
    // }
    // else if(edad >= 18 && edad <35){
    //   promedio = "Adulto Joven";
    // }
    // else if(edad >= 35 && edad <50){
    //   promedio = "Adulto"
    // }
    // else{
    //   promedio = "Adulto Mayor";
    // }



          
    tabla.appendChild(fila);
  });

  document.body.appendChild(tabla);
  const datos = document.getElementById("datos");

  if (Number(ingles) >= 60) {
    Number(ingles).style.background-Color.green
  }
}

const borrar = () => {
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  const modoNocturnoBtn = document.getElementById("modoNocturnoBtn");

  modoNocturnoBtn.addEventListener("click", function () {
    const tieneModoNocturno = document.body.hasAttribute("modo-nocturno");
    document.body.toggleAttribute("modo-nocturno");

    // Cambiar el texto del botón y aplicar estilos según el estado
    if (tieneModoNocturno) {
      modoNocturnoBtn.textContent = "Activar Modo Nocturno";
    } else {
      modoNocturnoBtn.textContent = "Desactivar Modo Nocturno";
    }
  });
});