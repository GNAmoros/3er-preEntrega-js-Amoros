const toggleBtn = document.getElementsByClassName('toggleBtn')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const services = [
    { id: 1, name: "Acido hialuronico", cost: 45000, area: "Estetica"},
    { id: 2, name: "Dermapen", cost: 7500, area: "Estetica"},
    { id: 3, name: "Fosfatidilcolina", cost: 8000, area: "Estetica"},
    { id: 4, name: "Peeling quimico", cost: 4000, area: "Estetica"},
    { id: 5, name: "Pap/Colpo", cost: 1000, area: "Ginecologia"},
    { id: 6, name: "Test de HPV", cost: 1200, area: "Ginecologia" },
    { id: 7, name: "Consejeria en salud sexual y reproductiva", cost: 3000, area: "Ginecologia"},
    { id: 8, name: "Oncolginecologia", cost: 5000, area: "Ginecologia"},
    { id: 9, name: "Obstetricia bajo/alto riesgo", cost: 7500, area: "Obstetricia"},
    { id: 10, name: "Rehabilitacion del suelo pelvico", cost: 6000, area: "Obstetricia"},
    { id: 11, name: "Post-parto", cost: 7500, area: "Obstetricia"},
    { id: 12, name: "Curso pre-parto", cost: 5000, area: "Obstetricia"}
]

// const datesEstetica = [
//     { day: "27/6", time: "16:00"},
//     { day: "27/6", time: "16:30"},
//     { day: "27/6", time: "17:00"},
//     { day: "27/6", time: "17:30"},
//     { day: "27/6", time: "18:00"},
//     { day: "27/6", time: "18:30"},
//     { day: "27/6", time: "19:00"},
//     { day: "29/6", time: "16:00"},
//     { day: "29/6", time: "16:30"},
//     { day: "29/6", time: "17:00"},
//     { day: "29/6", time: "17:30"},
//     { day: "29/6", time: "18:00"},
//     { day: "29/6", time: "18:30"},
//     { day: "29/6", time: "19:00"}
// ]

// const datesGinecologia = [
//     { day: "26/6", time: "16:00"},
//     { day: "26/6", time: "16:30"},
//     { day: "26/6", time: "17:00"},
//     { day: "26/6", time: "17:30"},
//     { day: "26/6", time: "18:00"},
//     { day: "26/6", time: "18:30"},
//     { day: "26/6", time: "19:00"},
//     { day: "29/6", time: "16:00"},
//     { day: "29/6", time: "16:30"},
//     { day: "29/6", time: "17:00"},
//     { day: "29/6", time: "17:30"},
//     { day: "29/6", time: "18:00"},
//     { day: "29/6", time: "18:30"},
//     { day: "29/6", time: "19:00"}
// ]

// const datesObstetricia = [
//     { day: "28/6", time: "16:00"},
//     { day: "28/6", time: "16:30"},
//     { day: "28/6", time: "17:00"},
//     { day: "28/6", time: "17:30"},
//     { day: "28/6", time: "18:00"},
//     { day: "28/6", time: "18:30"},
//     { day: "28/6", time: "19:00"},
//     { day: "30/6", time: "16:00"},
//     { day: "30/6", time: "16:30"},
//     { day: "30/6", time: "17:00"},
//     { day: "30/6", time: "17:30"},
//     { day: "30/6", time: "18:00"},
//     { day: "30/6", time: "18:30"},
//     { day: "30/6", time: "19:00"}
// ]


let container = document.getElementById("productAes");

services.forEach(service => {
    if (service.area === "Estetica") {
    let aesCard = document.createElement("div")
    aesCard.innerText = service.name
    container.appendChild(aesCard)
}
})