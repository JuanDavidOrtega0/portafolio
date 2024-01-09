/* Paso 1
Eres estudiante de Hogwarts, tienes la edad suficiente para entrar a estudiar,
tienes padres, y un linaje de sangre, aun no sabes tu casa, ni tu animal patronus,
también tienes cualidades, que son muy importantes para que el sombrero
seleccionador te asigne una casa.
Crear un objeto, con Nombre, edad, familia, linaje, casa, animal patronus,
cualidades, debes tener en tus cualidades solo los 3 de alguna de las casas:
“Valor, fuerza, audacia"
"Justicia, Lealtad, Paciencia"
“Creatividad, Erudición, Inteligencia"
"Ambición, Determinación, Astucia"
Linajes: Mestizo, muggle, Sangre pura */

let hogwarts = 0;

const informacionPrincipal = () => {
  hogwarts = {
    nombre: "Juan",
    edad: 18,
    familia: "Ortega",
    linaje: "sangre pura",
    casa: "",
    patronus: "",
    cualidades: ["ambición", "determinación", "astucia"],
  };
  
  Object.entries(hogwarts).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
    alert(`${key}: ${value}`);
  })
};



/* Paso 2
Es una año difícil en Hogwarts, ya que corren rumores que el innombrable ha vuelto,
y el y el famoso Harry Potter también ha ingresado contigo ¡¡¡
Crear Objeto de clases:
tus clases y tus profesores:
transformaciones: "Profesor Kevin Slughorn",
herbologia: "Profesor Maria Umbridge",
pociones: "Profesor Liliana McGonagall",
encantamientos: "Profesora Jackie",
defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
animalesMagicos: "Profesor David Filch",
historiaDeMagia: "Profesor Ronald Sprout" */

const clasesProfesores = () => {
  let clases = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    encantamientos: "Profesora Jackie",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout",
  };
  
  Object.entries(clases).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
    alert(`${key}: ${value}`);
  })
}


/* Paso 3
Inicia un nuevo día, es el día del sombrero seleccionador¡¡
hay una gran cena de bienvenida, estas tu con todos tus compas, según tu linaje y
cualidades, el sombrero seleccionador te asignara una casa.
Crear un objeto que sirva para escoger la casa al que pertenece el estudiante, será
condicional según tus cualidades y linaje.

Gryffindor ("valor, fuerza, audacia"
Linaje: Mestizo, muggle, Sangre pura )

Hufflepuff("justicia, lealtad, paciencia"
Linaje: Mestizo, muggle)

Ravenclaw(“creatividad, erudición, inteligencia"
Linaje: Mestizo, muggle, Sangre pura)

Slytherin ("ambición, determinación, astucia"
Linaje: "Sangre Pura") */

const casaAsignada = () => {
  hogwarts = {
    nombre: "Juan",
    edad: 18,
    familia: "Ortega",
    linaje: "sangre pura",
    casa: "",
    patronus: "",
    cualidades: ["ambición", "determinación", "astucia"],
  };

  if (hogwarts.cualidades.includes("ambición") && hogwarts.cualidades.includes("determinación") && hogwarts.cualidades.includes("astucia") && hogwarts.linaje == "sangre pura") {
    hogwarts.casa = "Slytherin";
    alert(`Tu casa es ${hogwarts.casa}`)
  }
  
  else if (hogwarts.cualidades.includes("valor") && hogwarts.cualidades.includes("fuerza") && hogwarts.cualidades.includes("audacia") && hogwarts.linaje == "mestizo" || hogwarts.linaje == "muggle" || hogwarts.linaje == "sangre pura") {
    hogwarts.casa = "Gryffindor";
    alert(`Tu casa es ${hogwarts.casa}`)
  }
  
  else if (hogwarts.cualidades.includes("justicia") && hogwarts.cualidades.includes("lealtad") && hogwarts.cualidades.includes("paciencia") && hogwarts.linaje == "mestizo" | hogwarts.linaje == "muggle") {
    hogwarts.casa = "Hufflepuff";
    alert(`Tu casa es ${hogwarts.casa}`)
  }
  
  else if (hogwarts.cualidades.includes("creatividad") && hogwarts.cualidades.includes("erudición") && hogwarts.cualidades.includes("inteligencia") && hogwarts.linaje == "mestizo" | hogwarts.linaje == "muggle" | hogwarts.linaje == "sangre pura") {
    hogwarts.casa = "Ravenclaw";
    alert(`Tu casa es ${hogwarts.casa}`)
  }
  
  else {
    hogwarts.casa = "Ninguna"
    alert(`No tienes ${hogwarts.casa} casa`)
  }
}


/* Paso 4
primer día de clases: vas temprano a clase de transformaciones, en clase de
transformaciones que es un objeto, con transformaciones con boggarts, «Altera
la habilidad de un boggart para cambiar de forma y provoca risa para derrotarlo.»
esto se logra con el encantamiento "Riddikulus".

- Definir la clase de Transformaciones
En este paso, estás creando un objeto llamado claseTransformaciones que
representa la clase de Transformaciones. Estableces el nombre del profesor,
el horario y una propiedad para rastrear la transformación de los boggarts.

- Paso 2: Crear una función para realizar la transformación con "Riddikulus"
Aquí defines una función realizarTransformacionRiddikulus dentro de
claseTransformaciones. Esta función verifica si hay un boggart presente y, si
es así, realiza la transformación con el encantamiento "Riddikulus".

- Paso 3: Crear una función para enfrentar un boggart
Aquí defines otra función enfrentarBoggart dentro de
claseTransformaciones. Esta función toma un boggart como argumento,
muestra un mensaje con la forma original del boggart, realiza la
transformación y muestra el resultado.

- Paso 4: Uso y llamada a las funciones
En este paso, creas un objeto boggartEjemplo y luego llamas a la función
enfrentarBoggart de claseTransformaciones para enfrentar el boggart. */

const verificarBoggart = () => {
  let boggart = {
    animal: "pollo",
    color: "amarillo",
    tamaño: "enorme",
    pelo: "mucho",
    textura: "gruesa",
    transformacion: "un pollito"
  }
  
  const claseTransformaciones = {
    nombre: "Profesor Kevin Slughorn",
    horario: "2:00PM - 3:45PM",
    realizarTransformacionRiddikulus: () => {
      let boggarts = prompt("Ingresa 1 si hay un boggart presente y 2 si no hay ningún boggart.")
      if (boggarts == 1) {
        alert("Transformación ¡Riddikulus!, has hecho el encantamiento.")
        alert(`El boggart es ${boggart.tamaño}, parece un ${boggart.animal} demonio, es de textura ${boggart.textura} y de color ${boggart.color}`)
        const boggartEjemplo = {
          enfrentarBoggart: alert(`Lo has derrotado, la transformación se ha hecho, el boggart ahora es ${boggart.transformacion}`)
        }
      }
      
      else {
        alert("No hay ningún bloggart presente")
      }
    },
  }
  
  claseTransformaciones.realizarTransformacionRiddikulus()
  
}


/* Paso 5 
puedes ir agregando las demás clases, pero es importante que vayas a la clase de
defensa contra las artes oscuras, para puedas defenderte de los dementores que
han escapado de Azkaban.
crear un objeto con nombre defensaContraLasArtesOscuras con la función de
generar un animal de patronus, lo genere random y llenar la variable, de la
propiedad animalPatronus.
Crear función donde aparece un dementor, y si el estudiante tiene ya su animal
patronus detiene el dementor, si no, el estudiante será absorbido, y será llevado a
la enfermería */

let animalesPosibles = 0;

const generarPatronus = () => {
  hogwarts = {
    nombre: "Juan",
    edad: 18,
    familia: "Ortega",
    linaje: "sangre pura",
    casa: "",
    patronus: "",
    cualidades: ["ambición", "determinación", "astucia"]
  }

  const defensaContraLasArtesOscuras = {
    generarAnimalPatronus: () => {
      animalesPosibles = ["Abarimon", "Aethonan", "Araña", "Arpía", "AlizorDeWestacottus", "Sentauro", "Minotauro", "King Kong", "Bestia", "Unicornio", "Medusa", "Cíclope"];
      this.animalPatronus = animalesPosibles[Math.floor(Math.random() * animalesPosibles.length)]
      hogwarts.patronus = this.animalPatronus;
      alert(`Tu animal Patronus es ${hogwarts.patronus}`)
    }
  };
  
  defensaContraLasArtesOscuras.generarAnimalPatronus();
  
  const dementor = () => {
    alert("Ha aparecido un dementor!")
  
    if (!hogwarts.patronus) {
      alert(`Dementor te ha encontrado, has sido absorbido, serás llevado a la enfermería `)
    }
  
    else {
      alert(`Has detenido el dementor porque tienes tu animal patronus que es ${hogwarts.patronus}`)
    }
  }
  
  dementor();
}


/* Paso 6
Mostrar información del estudiante con los cambios realizador a su objeto */

const verInformacion = () => {
  hogwarts = {
    nombre: "Juan",
    edad: 18,
    familia: "Ortega",
    linaje: "sangre pura",
    casa: "",
    patronus: "",
    cualidades: ["ambición", "determinación", "astucia"],
  };

  if (hogwarts.cualidades.includes("ambición") && hogwarts.cualidades.includes("determinación") && hogwarts.cualidades.includes("astucia") && hogwarts.linaje == "sangre pura") {
    hogwarts.casa = "Slytherin";
  }
  
  else if (hogwarts.cualidades.includes("valor") && hogwarts.cualidades.includes("fuerza") && hogwarts.cualidades.includes("audacia") && hogwarts.linaje == "mestizo" || hogwarts.linaje == "muggle" || hogwarts.linaje == "sangre pura") {
    hogwarts.casa = "Gryffindor";
  }
  
  else if (hogwarts.cualidades.includes("justicia") && hogwarts.cualidades.includes("lealtad") && hogwarts.cualidades.includes("paciencia") && hogwarts.linaje == "mestizo" | hogwarts.linaje == "muggle") {
    hogwarts.casa = "Hufflepuff";
  }
  
  else if (hogwarts.cualidades.includes("creatividad") && hogwarts.cualidades.includes("erudición") && hogwarts.cualidades.includes("inteligencia") && hogwarts.linaje == "mestizo" | hogwarts.linaje == "muggle" | hogwarts.linaje == "sangre pura") {
    hogwarts.casa = "Ravenclaw";
  }
  
  else {
    hogwarts.casa = "Ninguna"
  }

  animalesPosibles = ["Abarimon", "Aethonan", "Araña", "Arpía", "AlizorDeWestacottus", "Sentauro", "Minotauro", "King Kong", "Bestia", "Unicornio", "Medusa", "Cíclope"];
  this.animalPatronus = animalesPosibles[Math.floor(Math.random() * animalesPosibles.length)]
  hogwarts.patronus = this.animalPatronus;

  Object.entries(hogwarts).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
    alert(`${key}: ${value}`);
  })
}
