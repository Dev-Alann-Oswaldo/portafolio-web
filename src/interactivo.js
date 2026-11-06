document.querySelector("#titulo").textContent = "Mis Proyectos";
const lista = document.querySelector("#proyectos");
document.querySelector("#agregar")
.addEventListener("click", () => {
    const card = document.createElement("article");
    card.textContent = "Proyecto de portafolio";
    lista.append(card);
})

const boton = document.querySelector("#tema");
const guardado = localStorage.getItem("tema");
if (guardado === "oscuro"){
    document.body.classList.add("oscuro");
}
boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    const activo = document.body.classList.contains("oscuro");
    localStorage.setItem("tema", activo ? "oscuro" : "claro");
});
