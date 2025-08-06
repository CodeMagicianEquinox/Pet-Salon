// Constructor function
function Pet(name, age, breed, gender, service) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

// Display a single pet as a table row
function displayRow(pet, index) {
    const tableBody = document.querySelector("#petTable tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deletePet(${index})">Delete</button></td>
    `;

    tableBody.appendChild(row);
}

// Register a new pet and save to localStorage
function registerPet(event) {
    event.preventDefault();

    const form = document.getElementById("petRegistrationForm");
    const name = form.elements["petName"].value;
    const age = form.elements["petAge"].value;
    const gender = form.elements["petGender"].value;
    const breed = form.elements["petBreed"].value;
    const service = form.elements["petService"].value;

    const newPet = new Pet(name, age, breed, gender, service);

    // Load pets from localStorage or initialize empty array
    const pets = JSON.parse(localStorage.getItem("registeredPets")) || [];

    // Add new pet and save
    pets.push(newPet);
    localStorage.setItem("registeredPets", JSON.stringify(pets));

    refreshTable(); // Refresh the whole table with updated data
    form.reset();
}

// Refresh table from localStorage
function refreshTable() {
    const tableBody = document.querySelector("#petTable tbody");
    tableBody.innerHTML = "";

    const pets = JSON.parse(localStorage.getItem("registeredPets")) || [];
    pets.forEach((pet, index) => displayRow(pet, index));
}

// Delete a pet by index
function deletePet(index) {
    let pets = JSON.parse(localStorage.getItem("registeredPets")) || [];
    pets.splice(index, 1);
    localStorage.setItem("registeredPets", JSON.stringify(pets));
    refreshTable();
}

// Load pets when the page loads
window.onload = refreshTable;
