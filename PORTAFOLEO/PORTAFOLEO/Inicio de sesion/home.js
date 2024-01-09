const persons = [
    {
        nombre: "Juan",
        correo: "juan123@gmail.com",
        password: "juan123",
        images: [
            "./img/img1.jpg",
            "./img/img2.webp",
            "./img/img3.webp",
            "./img/img4.png",
            "./img/img5.webp",
            "./img/img6.webp",
            "./img/img7.jpg",
            "./img/img8.jpg",
        ]
    },
    {
        nombre: "Vale",
        correo: "vale123@gmail.com",
        password: "vale123",
        images: [
            "./img/img9.png",
            "./img/img10.webp",
            "./img/img11.webp",
            "./img/img12.webp",
            "./img/img13.jpeg",
            "./img/img14.jpg",
            "./img/img15.jpg",
            "./img/img16.jpg",
        ]
    }
]

persons[0].images.forEach(function(valor){
    let aqui = document.getElementById("aqui");
    
    let col = document.createElement("div");
    col.classList.add("col-md-3", "mt-3");
    aqui.appendChild(col)
    
    let img = document.createElement("img");
    img.setAttribute("src", valor)
    img.classList.add("img-fluid")
    col.appendChild(img)
    
    const body = document.getElementById("body");
    
    body.classList.add("niño")
    body.classList.remove("niña")

})

/* persons[1].images.forEach(function(valor){
    let aqui = document.getElementById("aqui");

    let col = document.createElement("div");
    col.classList.add("col-md-3", "mt-3");
    aqui.appendChild(col)

    let img = document.createElement("img");
    img.setAttribute("src", valor)
    img.classList.add("img-fluid", "img")
    col.appendChild(img)

    const body = document.getElementById("body");
    
    body.classList.add("niña")
    body.classList.remove("niño")
}) */

let nombre = sessionStorage.getItem("nombre");
document.getElementById("nombre").innerText = nombre;

if (!nombre) {
    location.href = "index.html"
}


const cerrarSesion = () => {
    sessionStorage.removeItem("nombre")
    window.location.href = "index.html"
}
