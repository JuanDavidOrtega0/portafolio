// Caso 1

/*Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día
viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo 
día le pagan a Hildebrando, a Hildebrando le pagan 2.500.000.*/

/*día viernes, Hildebrando llega al aeropuerto del dorado, se quiere comprar algo de 
comer antes del vuelo, ya que hace escala en Medellín en la madrugada, y llegaría en la 
mañana a Cartagena las opciones que tiene Hildebrando:

- si compra una almojábana con gaseosa son 15.000
le caerá mal porque lleva mucho en el stand
- un subway con gaseosa 23.000
estará llenito y bien
- no compra nada 
le tocara comprar algo en Medellín
Imprimir resultados, ir llevando la cuenta de cuanto dinero tiene disponible durante las 
vacacione*/

let sueldo = 0
let sueldoRestanteCaso1 = 0
let sueldoRestanteCaso2 = 0
let subwayGaseosa = 0;
let almojábanaGaseosa = 0;
let comida = 0;

const comprar = () => {

    sueldo = 2500000;
    almojábanaGaseosa = 15000;
    subwayGaseosa = 23000;
    comida = prompt("Ingresa el número 1 para comprar una almojábana. Ingresa el número 2 para comprar un Subway. Ingresa el número 3 para no comprar nada");
    sueldoRestanteCaso1 = sueldo - almojábanaGaseosa;
    sueldoRestanteCaso2 = sueldo - subwayGaseosa;

    if (comida == 1) {
        alert(`Compraste una almojábana con gaseosa, quedaste con ${sueldoRestanteCaso1} y te cayó mal porque llevabas mucho en el stand`);
    }

    else if (comida == 2) {
        alert(`Compraste un subway con gaseosa, quedaste con ${sueldoRestanteCaso2} y quedaste llenito y bien`);
    }

    else {
        alert(`No compraste nada, no gastaste dinero pero te toca comprar algo en Medellín`);
    }
}

/* Caso 2
llega a la sala de espera, y revisa su maleta que no cumple con el tamaño de maleta de 
mano, la aerolínea tiene el tamaño normal para las maletas de mano, 55 cm (alto) x 40 
cm (largo) x 20 cm (ancho), y Hildebrando que va a abordar tiene una maleta de 60 cm 
(alto) x 40 cm (largo)x 20x cm.

Es un poco más grande el tamaño normal, debe sacar ropa para disminuir el tamaño de la 
maleta. como puede solucionar con matemáticas para que el área sea igual a la normal, y 
que de las medidas correctas del tamaño que pide la aerolínea? Usar .math 
La idea fundamental es que necesitamos reducir cada dimensión de la maleta 
proporcionalmente para que todas las dimensiones cumplan con los límites establecidos 
por la aerolínea.

Instrucciones matemáticas:
1. Factor de reducción para cada dimensión:

• Para el alto, calculamos el factor de reducción como 𝑎𝑙𝑡𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
𝑎𝑙𝑡𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
• Para el largo, calculamos el factor de reducción como 𝑙𝑎𝑟𝑔𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
𝑙𝑎𝑟𝑔𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
• Para el ancho, calculamos el factor de reducción como 𝑎𝑛𝑐ℎ𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
𝑎𝑛𝑐ℎ𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .

2. Factor de reducción mas pequeño:
Utilizamos la función Math.min para encontrar el factor de reducción mas 
pequeño entre los tres, Esto asegura que todas las dimensiones se reducirán de manera 
proporcional y ninguna excederá los límites permitidos.

3. Nuevas dimensiones: 
• Multiplicamos cada dimensión original por el factor de reducción mas 
pequeño para obtener las nuevas dimensiones ajustadas.
• Nuevas dimensiones:
nuevoAlto= altoOriginal * factorReduccion
nuevoLargo = largoOriginal * factorReduccion
nuevoAncho=anchoOriginal * factorReduccion */

let altoOriginal = 0;
let largoOriginal = 0;
let anchoOriginal = 0;

const VerMedidas = () => {
    let altoPermitido = 55;
    let largoPermitido = 40;
    let anchoPermitido = 20;
    altoOriginal = 60;
    largoOriginal = 40;
    anchoOriginal = 20;

    let factorReduccionAlto = altoPermitido / altoOriginal;
    let factorReduccionLargo = largoPermitido / largoOriginal;
    let factorReduccionAncho = anchoPermitido / anchoOriginal;

    let factorReduccionMin = Math.min(factorReduccionAlto, factorReduccionLargo, factorReduccionAncho);

    let nuevoAlto = altoOriginal * factorReduccionMin;
    let nuevoLargo = largoOriginal * factorReduccionMin;
    let nuevoAncho = anchoOriginal * factorReduccionMin;

alert(`Las nuevas medidas para la maleta son ${nuevoAlto.toFixed()}cm de alto, ${nuevoLargo.toFixed()}cm de largo y ${nuevoAncho.toFixed()}cm de ancho`)
}

const VerOriginales = () => {
    altoOriginal = 60;
    largoOriginal = 40;
    anchoOriginal = 20;
    
    alert(`Las medidas originales de la maleta son ${altoOriginal}cm de alto, ${largoOriginal}cm de largo y ${anchoOriginal}cm de ancho`);
}

/* Caso 3
ahora que Hildebrando se dirige a la ciudad de Medellín, llega a las 2 am, y debe abordar
a las 3 am para Macondo, se encuentra con el problema de que el wifi del aeropuerto
está fallando, y necesita asegurar su reserva en el hotel para el siguiente día, caminando
por el aeropuerto encuentra wifi, la red se llama " ElPassEs:
01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números
binarios, además cobran 50.000 la hora.
Tienen que crear un código que convierta los números binarios, a decimales y luego a
caracteres */

let sueldoRestanteWifi = 0
let wifi1 = 0

const wifi = () => {
    wifi1 = 50000;
    sueldo = 2500000;
    subwayGaseosa = 23000;
    sueldoRestanteCaso2 = sueldo - subwayGaseosa;
    sueldoRestanteWifi = sueldoRestanteCaso2 - wifi1;

    let decimal1 = Number.parseInt("01110010", 2);
    let decimal2 = Number.parseInt("01101001", 2);
    let decimal3 = Number.parseInt("01110111", 2);
    let decimal4 = Number.parseInt("01101001", 2);

    let caracter1 = String.fromCharCode(decimal1);
    let caracter2 = String.fromCharCode(decimal2);
    let caracter3 = String.fromCharCode(decimal3);
    let caracter4 = String.fromCharCode(decimal4);

    alert(`La contraseña de la red "ElPassEs" es: "${caracter1} ${caracter2} ${caracter3} ${caracter4}", y el sueldo restante descontando lo del wifi es ${sueldoRestanteWifi}`);
    
}

/* console.log(decimal1);
console.log(decimal2);
console.log(decimal3);
console.log(decimal4);
console.log(caracter1);
console.log(caracter2);
console.log(caracter3);
console.log(caracter4); */

/* Caso 4
al llegar a Macondo, se da cuenta que todos hablan diferente, solo hablan con la la vocal i
así que todo lo que dirá es con la vocal “i”pedir el taxi. Convertir: "Taxi me puede llevar al
hotel mariposas amarillas" */

const taxi = () => {

    let string = "Taxi me puede llevar al hotel mariposas amarillas"
    let vocalI = string.replace(/[aeiou]/g, "i")

    alert(vocalI);
}

/* Caso 5
cuando llega al hotel, el taxi, le pide que le 300.000 pesos, y el queda sorprendido, asi
que empieza a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara los
300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. Si hay empata,
no pasa nada.
si el taxista gana, se descontará del dinero disponible */

let sueldoRestanteTaxista = 0;
let ganador = 0;
let taxi1 = 0;

const taxiCobro = () => {
    sueldo = 2500000;
    subwayGaseosa = 23000;
    sueldoRestanteCaso2 = sueldo - subwayGaseosa;
    wifi1 = 50000;
    taxi1 = 300000;
    sueldoRestanteWifi = sueldoRestanteCaso2 - wifi1;
    ganador = prompt("Ingresa el número 1 si el ganador es el taxista. Ingresa el número 2 si el ganador es el pasajero. Ingresa otro numero si hay un empate")
    sueldoRestanteTaxista = sueldoRestanteWifi - taxi1

    if (ganador == 1) {
        alert(`El ganador de piedra, papel o tijera fue el taxista, te descontaron 300.000 pesos y quedaste con ${sueldoRestanteTaxista} pesos`);
    }

    else if (ganador == 2) {
        alert(`No tuviste que pagar nada y quedaste con el mismo el sueldo restante que son ${sueldoRestanteWifi} pesos`);
    }

    else {
        alert("Hubo un empate, entonces no pasó nada");
    }
}

/* Caso 6
llega al hotel y nota que para las actividades dentro del hotel llevan un patrón de
vestimenta para cada cosa, se quedara 4 días
- amarillo
- ir a la piscina, el agua huele raro, pero no le pone importancia
-si se mete, empieza a sentirse ahogado, demasiado cloro, muere
(terminan las vacaciones)
-si no, no pasa nada
- verde
- caminatas, y agüita para el camino,
-si elige ir toda la caminata, ira a una hermosa cascada y se tomara fotos
-si no, llegará a cierto punto, y se devolverá solo, y den noche se pierde
- roja
- actividades en la playa
- voleibol, juega y la pasa genial
- nada en el mar, y monta moto
- se pone a tomar cocteles mientras descansa, de pronto siente un fuerte
dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver
de emergencia. (terminan las vacaciones)
- azul
- actividades dentro del hotel
- bingo, se lo gana y aumenta su dinero
- bailar, y la pasa muy bien
- casino y apuesta, y solo se queda con pasaje de regreso (terminan las
vacaciones) 
Preguntar mientras siga vivo, deben crear condicionales anidadas, pregunta por cada día
que va estar.
Resultado final:
cuanto día estuvo en Macondo Hildebrando?
sí pudo regresar o murió?
cuánto dinero gasto? */

let piscina = 0;
let caminata = 0;
let actividadHotel = 0;
let playa = 0;

const Vacaciones = () => {
    let vestimenta = prompt("Este es el primer día de tus vacaciones. Ingresa 1 para vestimenta amarilla. Ingresa 2 para vestimenta verde. Ingresa 3 para vestimenta roja. Ingresa 4 para vestimenta azul")

    if (vestimenta == 1) {
        alert("Fuiste a la piscina, el agua olía raro pero no le diste importancia.");
        piscina = prompt("Ingresa el número 1 para meterte a la piscina. Ingresa el número 2 para no meterte")

        if (piscina == 1) {
            alert("Te metiste en la piscina y te sentiste ahogado, había demasiado cloro y te moriste. Se acabaron tus vacaciones");
        }
        
        else {
            alert("No te metiste, así que no pasó nada");
        }
    }

    else if (vestimenta == 2) {
        alert("Irás a unas caminatas con agua para el camino.");
        caminata = prompt("Ingresa el número 1 para ir a toda la caminata completa. Ingresa 2 para ir hasta cierto punto y volver.")

        if (caminata == 1) {
            alert("Encontraste una hermosa cascada y te tomaste muchas fotos")
        }

        else {
            alert("Llegaste hasta cierto punto y te devolviste solo, y en la noche te perdiste")
        }
    }

    else if (vestimenta == 3) {
        alert("Irás a la playa hacer actividades.");
        playa = prompt("Ingresa el número 1 para ponerte a jugar. Ingresa el número 2 para ir al mar. Ingresa el número 3 para ponerte a beber")

        if (playa == 1) {
            alert("Jugaste voleibol y la pasaste genial")
        }

        else if (playa == 2) {
            alert("Fuiste al mar a nadar y a montar en moto")
        }

        else {
            alert("Te pusiste a tomar cocteles mientras descansabas, de pronto sentiste un fuerte dolor de cabeza y empezaste a perder la visión. Tomaste chirrinchi adulterado y te tuviste que devolver rápidamente de emergencia. Se acabaron tus vacaciones.")
        }
    }

    else if (vestimenta == 4) {
        alert("Harás actividades dentro del hotel.")
        actividadHotel = prompt("Ingresa el número 1 para jugar bingo. Ingresa el número 2 para bailar. Ingresa el número 3 para ir al casino")

        if (actividadHotel == 1) {
            alert("Jugaste bingo, te lo ganaste y aumentaste tu dinero")
        }

        else if (actividadHotel == 2) {
            alert("Bailaste y la pasaste muy bien")
        }

        else {
            alert("Fuiste al casino y apostaste todo, solo te quedaste con el pasaje de regreso. Se acabaron tus vacaciones")
        }
    }

    let vestimenta1 = prompt("Este es el segundo día de tus vacaciones. Ingresa 1 para vestimenta amarilla. Ingresa 2 para vestimenta verde. Ingresa 3 para vestimenta roja. Ingresa 4 para vestimenta azul")

    if (vestimenta1 == 1) {
        alert("Fuiste a la piscina, el agua olía raro pero no le diste importancia.");
        piscina = prompt("Ingresa el número 1 para meterte a la piscina. Ingresa el número 2 para no meterte")

        if (piscina == 1) {
            alert("Te metiste en la piscina y te sentiste ahogado, había demasiado cloro y te moriste. Se acabaron tus vacaciones");
        }
        
        else {
            alert("No te metiste, así que no pasó nada");
        }
    }

    else if (vestimenta1 == 2) {
        alert("Irás a unas caminatas con agua para el camino.");
        caminata = prompt("Ingresa el número 1 para ir a toda la caminata completa. Ingresa 2 para ir hasta cierto punto y volver.")

        if (caminata == 1) {
            alert("Encontraste una hermosa cascada y te tomaste muchas fotos")
        }

        else {
            alert("Llegaste hasta cierto punto y te devolviste solo, y en la noche te perdiste")
        }
    }

    else if (vestimenta1 == 3) {
        alert("Irás a la playa hacer actividades.");
        playa = prompt("Ingresa el número 1 para ponerte a jugar. Ingresa el número 2 para ir al mar. Ingresa el número 3 para ponerte a beber")

        if (playa == 1) {
            alert("Jugaste voleibol y la pasaste genial")
        }

        else if (playa == 2) {
            alert("Fuiste al mar a nadar y a montar en moto")
        }

        else {
            alert("Te pusiste a tomar cocteles mientras descansabas, de pronto sentiste un fuerte dolor de cabeza y empezaste a perder la visión. Tomaste chirrinchi adulterado y te tuviste que devolver rápidamente de emergencia. Se acabaron tus vacaciones.")
        }
    }

    else if (vestimenta1 == 4) {
        alert("Harás actividades dentro del hotel.")
        actividadHotel = prompt("Ingresa el número 1 para jugar bingo. Ingresa el número 2 para bailar. Ingresa el número 3 para ir al casino")

        if (actividadHotel == 1) {
            alert("Jugaste bingo, te lo ganaste y aumentaste tu dinero")
        }

        else if (actividadHotel == 2) {
            alert("Bailaste y la pasaste muy bien")
        }

        else {
            alert("Fuiste al casino y apostaste todo, solo te quedaste con el pasaje de regreso. Se acabaron tus vacaciones")
        }
    }

    let vestimenta2 = prompt("Este es el tercer día de tus vacaciones. Ingresa 1 para vestimenta amarilla. Ingresa 2 para vestimenta verde. Ingresa 3 para vestimenta roja. Ingresa 4 para vestimenta azul")

    if (vestimenta2 == 1) {
        alert("Fuiste a la piscina, el agua olía raro pero no le diste importancia.");
        piscina = prompt("Ingresa el número 1 para meterte a la piscina. Ingresa el número 2 para no meterte")

        if (piscina == 1) {
            alert("Te metiste en la piscina y te sentiste ahogado, había demasiado cloro y te moriste. Se acabaron tus vacaciones");
        }
        
        else {
            alert("No te metiste, así que no pasó nada");
        }
    }

    else if (vestimenta2 == 2) {
        alert("Irás a unas caminatas con agua para el camino.");
        caminata = prompt("Ingresa el número 1 para ir a toda la caminata completa. Ingresa 2 para ir hasta cierto punto y volver.")

        if (caminata == 1) {
            alert("Encontraste una hermosa cascada y te tomaste muchas fotos")
        }

        else {
            alert("Llegaste hasta cierto punto y te devolviste solo, y en la noche te perdiste")
        }
    }

    else if (vestimenta2 == 3) {
        alert("Irás a la playa hacer actividades.");
        playa = prompt("Ingresa el número 1 para ponerte a jugar. Ingresa el número 2 para ir al mar. Ingresa el número 3 para ponerte a beber")

        if (playa == 1) {
            alert("Jugaste voleibol y la pasaste genial")
        }

        else if (playa == 2) {
            alert("Fuiste al mar a nadar y a montar en moto")
        }

        else {
            alert("Te pusiste a tomar cocteles mientras descansabas, de pronto sentiste un fuerte dolor de cabeza y empezaste a perder la visión. Tomaste chirrinchi adulterado y te tuviste que devolver rápidamente de emergencia. Se acabaron tus vacaciones.")
        }
    }

    else if (vestimenta2 == 4) {
        alert("Harás actividades dentro del hotel.")
        actividadHotel = prompt("Ingresa el número 1 para jugar bingo. Ingresa el número 2 para bailar. Ingresa el número 3 para ir al casino")

        if (actividadHotel == 1) {
            alert("Jugaste bingo, te lo ganaste y aumentaste tu dinero")
        }

        else if (actividadHotel == 2) {
            alert("Bailaste y la pasaste muy bien")
        }

        else {
            alert("Fuiste al casino y apostaste todo, solo te quedaste con el pasaje de regreso. Se acabaron tus vacaciones")
        }
    }

    let vestimenta3 = prompt("Este es el último día día de tus vacaciones. Ingresa 1 para vestimenta amarilla. Ingresa 2 para vestimenta verde. Ingresa 3 para vestimenta roja. Ingresa 4 para vestimenta azul")

    if (vestimenta3 == 1) {
        alert("Fuiste a la piscina, el agua olía raro pero no le diste importancia.");
        piscina = prompt("Ingresa el número 1 para meterte a la piscina. Ingresa el número 2 para no meterte")

        if (piscina == 1) {
            alert("Te metiste en la piscina y te sentiste ahogado, había demasiado cloro y te moriste. Se acabaron tus vacaciones");
        }
        
        else {
            alert("No te metiste, así que no pasó nada");
        }
    }

    else if (vestimenta3 == 2) {
        alert("Irás a unas caminatas con agua para el camino.");
        caminata = prompt("Ingresa el número 1 para ir a toda la caminata completa. Ingresa 2 para ir hasta cierto punto y volver.")

        if (caminata == 1) {
            alert("Encontraste una hermosa cascada y te tomaste muchas fotos")
        }

        else {
            alert("Llegaste hasta cierto punto y te devolviste solo, y en la noche te perdiste")
        }
    }

    else if (vestimenta3 == 3) {
        alert("Irás a la playa hacer actividades.");
        playa = prompt("Ingresa el número 1 para ponerte a jugar. Ingresa el número 2 para ir al mar. Ingresa el número 3 para ponerte a beber")

        if (playa == 1) {
            alert("Jugaste voleibol y la pasaste genial")
        }

        else if (playa == 2) {
            alert("Fuiste al mar a nadar y a montar en moto")
        }

        else {
            alert("Te pusiste a tomar cocteles mientras descansabas, de pronto sentiste un fuerte dolor de cabeza y empezaste a perder la visión. Tomaste chirrinchi adulterado y te tuviste que devolver rápidamente de emergencia. Se acabaron tus vacaciones.")
        }
    }

    else if (vestimenta3 == 4) {
        alert("Harás actividades dentro del hotel.")
        actividadHotel = prompt("Ingresa el número 1 para jugar bingo. Ingresa el número 2 para bailar. Ingresa el número 3 para ir al casino")

        if (actividadHotel == 1) {
            alert("Jugaste bingo, te lo ganaste y aumentaste tu dinero")
        }

        else if (actividadHotel == 2) {
            alert("Bailaste y la pasaste muy bien")
        }

        else {
            alert("Fuiste al casino y apostaste todo, solo te quedaste con el pasaje de regreso. Se acabaron tus vacaciones")
        }
    }
}

const DineroGastado = () => {
    sueldo = 2500000;
    almojábanaGaseosa = 15000;
    subwayGaseosa = 23000;
    sueldoRestanteCaso1 = sueldo - almojábanaGaseosa;
    sueldoRestanteCaso2 = sueldo - subwayGaseosa;
    wifi1 = 50000;
    taxi1 = 300000;
    sueldoRestanteWifi = sueldoRestanteCaso2 - wifi1;
    sueldoRestanteTaxista = sueldoRestanteWifi - taxi1;

    comida = prompt("Ingresa el número 1 si compraste una almojábana. Ingresa el número 2 para compraste un Subway. Ingresa el número 3 si no compraste nada");
    
    if (comida == 1) {
        ganador = prompt("Ingresa el número 1 si el ganador fue el taxista. Ingresa el número 2 si el ganador fue el pasajero. Ingresa otro numero si hubo un empate");

        if (ganador == 1) {
            alert(`Compraste una almojábana que costó ${almojábanaGaseosa}, pagaste el wifi que costó ${wifi1} y el ganador fue el taxista entonces le pagaste ${taxi1}. Entonces en total gastaste ${almojábanaGaseosa + wifi1 + taxi1}`);
        }
    
        else if (ganador == 2) {
            alert(`Compraste una almojábana que costó ${almojábanaGaseosa}, pagaste el wifi que costó ${wifi1} y el ganador fue el pasajero entonces no le pagaste nada. Entonces en total gastaste ${almojábanaGaseosa + wifi1}`);
        }
    
        else {
            alert(`Compraste una almojábana que costó ${almojábanaGaseosa}, pagaste el wifi que costó ${wifi1} y hubo un empate entonces no pasó nada. Entonces en total gastaste ${almojábanaGaseosa + wifi1}`);
        }
    }

    else if (comida == 2) {
        ganador = prompt("Ingresa el número 1 si el ganador fue el taxista. Ingresa el número 2 si el ganador fue el pasajero. Ingresa otro numero si hubo un empate");

        if (ganador == 1) {
            alert(`Compraste un subway que costó ${subwayGaseosa}, pagaste el wifi que costó ${wifi1} y el ganador fue el taxista entonces le pagaste ${taxi1}. Entonces en total gastaste ${subwayGaseosa + wifi1 + taxi1}`);
        }
    
        else if (ganador == 2) {
            alert(`Compraste un subway que costó ${subwayGaseosa}, pagaste el wifi que costó ${wifi1} y el ganador fue el pasajero entonces no le pagaste nada. Entonces en total gastaste ${subwayGaseosa + wifi1}`);
        }
    
        else {
            alert(`Compraste un subway que costó ${subwayGaseosa}, pagaste el wifi que costó ${wifi1} y hubo un empate entonces no pasó nada. Entonces en total gastaste ${subwayGaseosa + wifi1}`);
        }
    }

    else {
        ganador = prompt("Ingresa el número 1 si el ganador fue el taxista. Ingresa el número 2 si el ganador fue el pasajero. Ingresa otro numero si hubo un empate");

        if (ganador == 1) {
            alert(`No compraste nada para comer, pagaste el wifi que costó ${wifi1} y el ganador fue el taxista entonces le pagaste ${taxi1}. Entonces en total gastaste ${wifi1 + taxi1}`);
        }
    
        else if (ganador == 2) {
            alert(`No compraste nada para comer, pagaste el wifi que costó ${wifi1} y el ganador fue el pasajero entonces no le pagaste nada. Entonces en total gastaste ${wifi1}`);
        }
    
        else {
            alert(`No compraste nada para comer, pagaste el wifi que costó ${wifi1} y hubo un empate entonces no pasó nada. Entonces en total gastaste ${wifi1}`);
        }
    }
}