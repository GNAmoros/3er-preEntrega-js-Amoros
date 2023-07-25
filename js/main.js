const toggleBtn = document.getElementsByClassName('toggleBtn')[0]
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

document.addEventListener("DOMContentLoaded", async function() {
let servies = [];

try {
    const response = await fetch ("services.json");
    if (!response.ok) {
        throw new Error ("La respuesta de la red no fue correcta");
    }
    services = await response.json();
} catch (err) {
    console.err("Error al obtener datos de servicios", err);
}

let aesthetic = document.getElementById("productAes");
const gynecology = services.filter((service) => service.area === "Ginecologia");
const obstetrics = services.filter((service) => service.area === "Obstetricia");



services.forEach(service => {
    if (service.area === "Estetica") {
        let aesCard = document.createElement("div");
        aesCard.className = "productCard";
        aesCard.innerHTML = `
            <h3>${service.name}</h3>
            <img class="aesImg" src="../img/${service.img}">
        `;
        aesCard.addEventListener("click", () => {
            showModal(service);
        });
        aesthetic.appendChild(aesCard);
    }
});

function populateGynecologyCards() {
    const gynecologyDiv = document.getElementById("productGin");

    gynecology.forEach((service) => {
        let ginCard = document.createElement("div");
        ginCard.className = "productCard";
        ginCard.innerHTML = `
            <h3>${service.name}</h3>
            <img class="aesImg" src="./img/${service.img}">
        `;
        ginCard.addEventListener("click", () => {
            showModal(service);
        });
        gynecologyDiv.appendChild(ginCard);
    });
}

populateGynecologyCards();

function populateObstetricsCards() {
    const obstetricsDiv = document.getElementById("productObs");

    obstetrics.forEach((service) => {
        let obsCard = document.createElement("div");
        obsCard.className = "productCard";
        obsCard.innerHTML = `
            <h3>${service.name}</h3>
            <img class="aesImg" src="../img/${service.img}">
        `;
        obsCard.addEventListener("click", () => {
            showModal(service);
        });
        obstetricsDiv.appendChild(obsCard);
    });
}

populateObstetricsCards();


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
    closeButton.setAttribute("aria-label", "Cierre");

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
    closeButtonFooter.textContent = "Cierre";

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
});

console.log('desde index.js');

let appointmentData = JSON.parse(localStorage.getItem("appointments")) || [];

const saveAppointment = (name, date, time, area) => {
    const startTime = new Date(date + "T09:00:00");
    const endTime = new Date(date + "T18:00:00");

    const selectedTime = new Date(date + "T" + time);

    const existingAppointment = appointmentData.find(
        (appointment) =>
            appointment.date === date && appointment.time === time && appointment.area === area
    );

    if (selectedTime >= startTime && selectedTime <= endTime) {
        if (existingAppointment) {
            const modal = createModal("Error", "Ya hay una reserva para la misma fecha y hora. Por favor, elija otro horario.");
            showModal(modal);
        } else {
            appointmentData.push({ name, date, time, area });
            localStorage.setItem("appointments", JSON.stringify(appointmentData));
            console.log(appointmentData);
            const modal = createModal("Exito", "Reserva guardada exitosamente.");
            showModal(modal);

            const nameInput = document.getElementById("name");
            const dateInput = document.getElementById("date");
            const timeSelect = document.getElementById("time");
            nameInput.value = "";
            dateInput.value = "";
            timeSelect.value = "";
        }
    } else {
        const modal = createModal("Cuidado", "El horario elegido se encuentra fuera del horario de trabajo. Por favor elija un horario entre las 9:00 y las 18:00.");
        showModal(modal);
    }
};

function createModal(title, message) {
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
    modalTitle.textContent = title;

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Cierre");

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.textContent = message;

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";

    const closeButtonFooter = document.createElement("button");
    closeButtonFooter.type = "button";
    closeButtonFooter.className = "btn btn-secondary";
    closeButtonFooter.setAttribute("data-bs-dismiss", "modal");
    closeButtonFooter.textContent = "Cierre";

    modalFooter.appendChild(closeButtonFooter);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);

    modal.appendChild(modalDialog);

    return modal;
}

function showModal(modal) {
    document.body.appendChild(modal);
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}
const saveBtn = document.getElementById("saveDate");

saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date");
    const timeSelect = document.getElementById("time");

    const name = nameInput.value.trim();
    const date = dateInput.value;
    const time = timeSelect.value;
    const area = document.querySelector(".navbarLinks .active a")?.textContent;

    if (name !== "" && date !== "" && time !== "" && area !=="") {
        saveAppointment(name, date, time, area);
        nameInput.value = "";
        dateInput.value = "";
        timeSelect.value = "";
    }
});

const availableTimes = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

function populateTimeDropdown() {
    const timeSelect = document.getElementById("time");

    timeSelect.innerHTML = "";

    availableTimes.forEach((time) => {
        const option = document.createElement("option");
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });
}

populateTimeDropdown();

const searchBtn = document.getElementById("searchDate");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("searchName");
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== "") {
        const filteredAppointments = appointmentData.filter(
            (appointment) =>
                appointment.name.toLowerCase() === searchTerm.toLowerCase()
        );
        console.log(filteredAppointments);
    }
});

const displayModalBtn = document.getElementById("searchDate");

displayModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("searchName");
    const searchTerm = searchInput.value.trim();

    if (searchTerm !== "") {
        const filteredAppointments = appointmentData.filter(
            (appointment) =>
                appointment.name.toLowerCase() === searchTerm.toLowerCase()
        );
        displaySavedAppointments(filteredAppointments);
    }
});

function displaySavedAppointments(appointments) {
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
    modalTitle.textContent = "Saved Appointments";

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Cierre");

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    const modalBody = document.createElement("div");
    modalBody.className = "modal-body";

    if (appointments.length === 0) {
        modalBody.textContent = "No se encontraron reservas";
    } else {
        const ul = document.createElement("ul");
        appointments.forEach((appointment) => {
            const li = document.createElement("li");
            li.textContent = `Name: ${appointment.name}, Date: ${appointment.date}, Time: ${appointment.time}`;
            ul.appendChild(li);
        });
        modalBody.appendChild(ul);
    }

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);

    modalDialog.appendChild(modalContent);

    modal.appendChild(modalDialog);

    document.body.appendChild(modal);

    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}