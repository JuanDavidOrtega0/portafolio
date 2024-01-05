const select = document.getElementById("select").value;
const body = document.getElementById("body");

const cambiarTheme = () => {
    const select = document.getElementById("select").value;
    const body = document.getElementById("body");

    if (select == "claro") {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-free");
        localStorage.setItem("EstiloEscogido", "theme-light");
    }
    else if (select == "oscuro") {
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
        localStorage.setItem("EstiloEscogido", "theme-dark")
    }
    else if (select == "libre") {
        body.classList.add("theme-free");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-light");
        localStorage.setItem("EstiloEscogido", "theme-free")
    }
    
}

document.addEventListener("DOMContentLoaded", function (){
    const temaEscogido = localStorage.getItem("EstiloEscogido");
    if(temaEscogido){
        let body = document.getElementById("body");

        if (temaEscogido == "1"){
            body.classList.add("theme-light");
            body.classList.remove("theme-dark");
            body.classList.remove("theme-free");
        }
        else if (temaEscogido == "2") {
            body.classList.add("theme-dark");
            body.classList.remove("theme-light");
            body.classList.remove("theme-free");
        }
        else if (temaEscogido == "3") {
            body.classList.add("theme-free");
            body.classList.remove("theme-dark");
            body.classList.remove("theme-light");
        }
    }
});

try{
    const temaEscogido = localStorage.getItem("EstiloEscogido");
    let body = document.getElementById("body");

    if (temaEscogido === "claro"){
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-free");
    }
    else if (temaEscogido === "oscuro") {
        body.classList.add("theme-dark");
        body.classList.remove("theme-light");
        body.classList.remove("theme-free");
    }
    else if (temaEscogido === "libre") {
        body.classList.add("theme-free");
        body.classList.remove("theme-dark");
        body.classList.remove("theme-light");
    }
} catch{}