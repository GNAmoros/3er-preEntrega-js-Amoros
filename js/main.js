const toggleBtn = document.getElementsByClassName('toggleBtn')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const services = [
    { id: 1, name: "Acido hialuronico", cost: 45000, area: "Estetica", img:"acidohialuronico.webp"},
    { id: 2, name: "Dermapen", cost: 7500, area: "Estetica", img:"dermapen.webp"},
    { id: 3, name: "Fosfatidilcolina", cost: 8000, area: "Estetica", img:"fosfatidilcolina.webp"},
    { id: 4, name: "Peeling quimico", cost: 4000, area: "Estetica", img:"peelingquimico.webp"},
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


let aesthetic = document.getElementById("productAes");

services.forEach(service => {
    if (service.area === "Estetica") {
    let aesCard = document.createElement("div")
    aesCard.className = "productCard"
    aesCard.innerHTML = `
        <h3>${service.name}<h3>
        <img class="aesImg" src="../img/${service.img}">
        <div class="aesImg" style="background-image: url(../img/${service.img}"></div>
        `;
    aesCard.addEventListener("click", () => {
        showModal(service);
    });
    aesthetic.appendChild(aesCard);
}
})
function showModal(service) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("tabindex", "-1");

    const modalDialog = document.createElement("div");
    modalDialog.className = "modal-dialog";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";

    const modalTitle = document.createElement("h5");
    modalTitle.className = "modal-title";
    modalTitle.textContent = service.name;

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.innerHTML = `
        <p>Service ID: ${service.id}</p>
        <p>Cost: ${service.cost}</p>
        <p>Area: ${service.area}</p>
    `;

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";

    const closeButtonFooter = document.createElement("button");
    closeButtonFooter.type = "button";
    closeButtonFooter.className = "btn btn-secondary";
    closeButtonFooter.setAttribute("data-bs-dismiss", "modal");
    closeButtonFooter.textContent = "Close";

    modalFooter.appendChild(closeButtonFooter);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);

    modal.appendChild(modalDialog);

    document.body.appendChild(modal);

    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

let gineco = document.getElementById("productGineco");

services.forEach(service => {
    if (service.area === "Ginecologia") {
    let ginecoCard = document.createElement("div")
    ginecoCard.className = "productCard"
    ginecoCard.innerHTML = `
        <h3>${service.name}<h3>
        <div class="aesImg" style="background-image: url(../img/${service.img}"></div>
        `
    gineco.appendChild(aesCard)
}
})