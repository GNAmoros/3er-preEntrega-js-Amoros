const toggleBtn = document.getElementsByClassName('toggleBtn')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const services = [
    { id: 1, name: "Acido hialuronico", cost: 45000, area: "Estetica", description: " reduce la visibilidad de los signos del paso del tiempo al estimular a las células que producen elastina y colágeno", img: "acidohialuronico.webp" },
    { id: 2, name: "Dermapen", cost: 7500, area: "Estetica", description: "dispositivo de microagujas que se utiliza en tratamientos faciales estéticos para rejuvenecer y mejorar la apariencia de la piel", img: "dermapen.webp" },
    { id: 3, name: "Fosfatidilcolina", cost: 8000, area: "Estetica", description: "elimine depósitos de grasa localizada del cuerpo, logrando un aspecto armonioso en muy poco tiempo", img: "fosfatidilcolina.webp" },
    { id: 4, name: "Peeling quimico", cost: 4000, area: "Estetica", description: "exfoliación profunda de la piel del rostro", img: "peelingquimico.webp" },
    { id: 5, name: "Pap/Colpo", cost: 1000, area: "Ginecologia" },
    { id: 6, name: "Test de HPV", cost: 1200, area: "Ginecologia" },
    { id: 7, name: "Consejeria en salud sexual y reproductiva", cost: 3000, area: "Ginecologia" },
    { id: 8, name: "Oncolginecologia", cost: 5000, area: "Ginecologia" },
    { id: 9, name: "Obstetricia bajo/alto riesgo", cost: 7500, area: "Obstetricia" },
    { id: 10, name: "Rehabilitacion del suelo pelvico", cost: 6000, area: "Obstetricia" },
    { id: 11, name: "Post-parto", cost: 7500, area: "Obstetricia" },
    { id: 12, name: "Curso pre-parto", cost: 5000, area: "Obstetricia" }
];

let aesthetic = document.getElementById("productAes");

services.forEach(service => {
    if (service.area === "Estetica") {
        let aesCard = document.createElement("div");
        aesCard.className = "productCard";
        aesCard.innerHTML = `
            <h3>${service.name}<h3>
            <img class="aesImg" src="../img/${service.img}">
        `;
        aesCard.addEventListener("click", () => {
            showModal(service);
        });
        aesthetic.appendChild(aesCard);
    }
});

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
        <p>${service.description}</p>
        <p>Costo: ${service.cost}</p>
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

console.log('desde index.js');

const dateArray = JSON.parse(localStorage.getItem('dates')) || [];

const btn = document.getElementById('saveDate');

const saveAppointment = () => {
    const dateInput = document.getElementById('date');
    const date = dateInput.value;

    if (date.trim() !== '') {
        dateArray.push(date);
        localStorage.setItem('dates', JSON.stringify(dateArray));
        console.log(dateArray);
        dateInput.value = '';
    }
};

btn.addEventListener('click', (e) => {
    e.preventDefault();
    saveAppointment();
})