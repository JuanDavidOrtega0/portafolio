let root = document.getElementById("root");

let arreglo = [
    {
        img: "img/hamburguesa-1.webp",
        precio: "$ 8.900",
        tittle: "BBQ Crunch",
        p: "1 Sándwich BBQ Crunch (1 Filete de pollo apanado, tomate, lechuga y cebolla)"
    },
    {
        img: "img/hamburguesa-2.webp",
        precio: "$ 15.900",
        tittle: "Kentucky Sandiwch",
        p: "1 Kentucky hamburguesa / Sandwich (1 filete de pechuga de pollo apanado, pepinillos,..."
    },
    {
        img: "img/hamburguesa-3.webp",
        precio: "$ 15.900",
        tittle: "Combo BBQ Crunch",
        p: "1 Sandwich BBQ Crunch (1 filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET..."
    },
    {
        img: "img/hamburguesa-4.webp",
        precio: "$ 16.900",
        tittle: "Kentucky Coronel",
        p: "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada..."
    },
    {
        img: "img/hamburguesa-5.webp",
        precio: "$ 21.900",
        tittle: "Combo Kentucky Sandwich",
        p: "1 Kentucky hamburguesa / Sandiwch (1 filete de pechuga de pollo apanado, pepinillos,..."
    },
    {
        img: "img/hamburguesa-6.webp",
        precio: "$ 22.900",
        tittle: "Combo Kentucky Coronel",
        p: "1 Kentucky Coronel hamburguesa / Sandwich (1 FIlete de Pechuga de pollo apanado, Ensalada..) "
    },
    {
        img: "img/hamburguesa-7.webp",
        precio: "$ 23.900",
        tittle: "Sandiwch Crispy BBQ",
        p: "1 Sandiwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp..."
    },
    {
        img: "img/hamburguesa-8.webp",
        precio: "$ 29.900",
        tittle: "Combo Sandiwich Crispy BBQ ",
        p: "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp..."
    },
]

let image = document.createElement("div");
image.classList.add("image", "text-center");
root.appendChild(image)

let logo1 = document.createElement("img");
logo1.classList.add("img-fluid");
logo1.style.padding = "30px"
logo1.style.width = "250px"
logo1.setAttribute("src", "https://paseosanrafael.com/wp-content/uploads/2019/11/KFC_new_logo-800x720.png");
image.appendChild(logo1)

let logo = document.createElement("img");
logo.classList.add("img-fluid");
logo.style.padding = "30px"
logo.style.width = "500px"
logo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/1200px-KFC_Logo.svg.png");
image.appendChild(logo)

let container = document.createElement("div");
container.classList.add("container");
root.appendChild(container);

let row1 = document.createElement("div");
row1.classList.add("row");
container.appendChild(row1);

let col1 = document.createElement("div");
col1.classList.add("col-md-6");
row1.appendChild(col1);

let select1 = document.createElement("select");
select1.classList.add("form-select");
col1.appendChild(select1);

let option1 = document.createElement("option");
option1.value = "";
option1.innerText = "Seleccionar...";
select1.appendChild(option1)

let option2 = document.createElement("option");
option2.value = "español";
option2.innerText = "Español";
select1.appendChild(option2)

let option3 = document.createElement("option");
option3.value = "ingles";
option3.innerText = "Ingles"
select1.appendChild(option3)

let col2 = document.createElement("div");
col2.classList.add("col-md-6");
row1.appendChild(col2);

let select2 = document.createElement("select");
select2.classList.add("form-select");
select2.setAttribute("id","select2");
select2.setAttribute("onchange","cambiarTheme()")
col2.appendChild(select2)

let option4 = document.createElement("option");
option4.value = "";
option4.innerText = "Seleccionar...";
select2.appendChild(option4)

let option5 = document.createElement("option");
option5.value = "claro";
option5.innerText = "Claro";
select2.appendChild(option5)

let option6 = document.createElement("option");
option6.value = "oscuro";
option6.innerText = "Oscuro";
select2.appendChild(option6)

let option7 = document.createElement("option");
option7.value = "libre";
option7.innerText = "Libre";
select2.appendChild(option7)

let row = document.createElement("div");
row.classList.add("row");
row.classList.add("mt-5");
container.appendChild(row);



arreglo.forEach(function (elemento) {
    let col = document.createElement("div");
    col.classList.add("col-md-3");
    row.appendChild(col);

    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("text-center")
    card.classList.add("mb-5")
    card.style.padding = "20px"
    col.appendChild(card);

    let img = document.createElement("img");
    img.classList.add("img-fluid");
    img.setAttribute("src", elemento.img);
    card.appendChild(img)

    let precio = document.createElement("p");
    precio.classList.add("precio");
    precio.classList.add("mt-3")
    precio.innerText = elemento.precio;
    card.appendChild(precio)

    let tittle = document.createElement("p");
    tittle.classList.add("tittle")
    tittle.innerText = elemento.tittle;
    card.appendChild(tittle);

    let p = document.createElement("p");
    p.classList.add("p");
    p.innerText = elemento.p
    card.appendChild(p);

    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("btn-danger")
    btn.classList.add("w-100")
    btn.classList.add("mt-2")
    btn.innerText = "Comprar"
    card.appendChild(btn)
})

const cambiarTheme = () => {

    if (select2.value == "claro") {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-free");
        localStorage.setItem("EstiloEscogido", "theme-light");
    }
    else if (select2.value == "oscuro") {
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
        localStorage.setItem("EstiloEscogido", "theme-dark")
    }
    else if (select2.value == "libre") {
        body.classList.add("theme-free");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-light");
        localStorage.setItem("EstiloEscogido", "theme-free")
    }
    
}