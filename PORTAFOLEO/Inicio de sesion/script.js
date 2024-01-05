const persons = [
    {
        nombre: "Juan",
        correo: "juan123@gmail.com",
        password: "juan123",
        images: [
            "./img/img1.jpeg",
            "./img/img2.avif",
            "./img/img3.webp",
            "./img/img4.avif",
            "./img/img5.webp",
        ]
    },
    {
        nombre: "Vale",
        correo: "vale123@gmail.com",
        password: "vale123"
    }
]

function iniciarSesion() {
    let correo = document.getElementById("correo");
    let password = document.getElementById("password");

    if (correo.value != "") {
        correo.classList.add("is-valid");
        correo.classList.remove("is-invalid");
    }
    else {
        correo.classList.add("is-invalid");
        correo.classList.remove("is-valid");
    }

    if (password.value != "") {
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
    }
    else {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
    }
    
    
    
    
    persons.forEach(function (person) {
        const inner1 = document.getElementById("inner1");
        
        if (correo.value == person.correo && password.value == person.password) {
            sessionStorage.setItem("nombre", person.nombre);
            location.href = "home.html";
            inner1.style.color = "green"
            inner1.innerText = "Correo y contraseña correctos!"
        }
        
        else {
            inner1.style.color = "red"
            inner1.innerText = "Correo o contraseña incorrecta!"
        }
        
    })
}

