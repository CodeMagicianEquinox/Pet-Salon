let pet1 = {
    name: "Spike",
    age: 2,
    Gender: "Male",
    Service: "House dog",
    Breed: "Golden Retreiver"
}


let pet2 = {
    name: "Max",
    age: 10,
    Gender: "Male",
    Service: "Yard dog",
    Breed: "German shepherd"
}

let pet3 = {
    name: "Sarah",
    age: 1,
    Gender: "Female",
    Service: "Gold Fish",
    Breed: "Rainbow fish"
}

let pets = [pet1, pet2, pet3];

function petCount() {
    let total = pets.length
    document.getElementById("answerField").textContent = "Total Pets: " + total;
}

for (let i=0; i< pets.length; i++) { 
console.log(pets[i]);
}

function displayPetNames() {
    let list = document.getElementById("petNamesList");
    list.innerHTML = "";
    for (let i = 0; i < pets.length; i++) {
        let li = document.createElement("li");
        li.textContent = pets[i].name;
        list.appendChild(li);
    }
}
displayPetNames();

function Pet(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
}

function register(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let breed = document.getElementById("breed").value;
    let service = document.getElementById("service").value;
    let type = document.getElementById("type").value;

    let newPet = new Pet(name, age, gender, breed, service, type);
    pets.push(newPet);

    displayPetNames();
    petCount();
    document.getElementById("petForm").reset();
}
