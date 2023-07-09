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
        <h3>${service.name}</h3>
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
  
  let appointmentData = JSON.parse(localStorage.getItem("appointments")) || [];
  
  const saveAppointment = (name, date, time) => {
    const startTime = new Date(date + "T09:00:00");
    const endTime = new Date(date + "T18:00:00");
  
    const selectedTime = new Date(date + "T" + time);
    
    if (selectedTime >= startTime && selectedTime <= endTime) {
      appointmentData.push({ name, date, time });
      localStorage.setItem("appointments", JSON.stringify(appointmentData));
      console.log(appointmentData);
    } else {
      alert("El horario elegido se encuentra fuera del horario de trabajo. Por favor elija un horario entre las 9:00 y las 18:00.");
    }
  };
  
  const saveBtn = document.getElementById("saveDate");
  
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date");
    const timeSelect = document.getElementById("time");
  
    const name = nameInput.value.trim();
    const date = dateInput.value;
    const time = timeSelect.value;
  
    if (name !== "" && date !== "" && time !== "") {
      saveAppointment(name, date, time);
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
    closeButton.setAttribute("aria-label", "Close");
  
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