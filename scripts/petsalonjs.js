// Static pet objects
let pet1 = {
  name: "Spike",
  age: 2,
  gender: "Male",
  service: "House dog",
  breed: "Golden Retriever",
  type: "Dog"
};

let pet2 = {
  name: "Max",
  age: 10,
  gender: "Male",
  service: "Yard dog",
  breed: "German Shepherd",
  type: "Dog"
};

let pet3 = {
  name: "Sarah",
  age: 1,
  gender: "Female",
  service: "Gold Fish",
  breed: "Rainbow Fish",
  type: "Fish"
};

// Array of pets
let pets = [pet1, pet2, pet3];

// Constructor
function Pet(name, age, gender, breed, service, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
}

// Display pet names in a list
function displayPetNames() {
  let list = document.getElementById("petNamesList");
  list.innerHTML = "";
  for (let i = 0; i < pets.length; i++) {
    let li = document.createElement("li");
    li.textContent = pets[i].name;
    list.appendChild(li);
  }
}

// Count and display total pets
function petCount() {
  let total = pets.length;
  document.getElementById("answerField").textContent = "Total Pets: " + total;
}

// Debugging output
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

// Show initial data
displayPetNames();
petCount();

// Register pet with jQuery validation
function register(event) {
  event.preventDefault();

  // Use jQuery to get values
  let name = $("#name").val().trim();
  let age = $("#age").val().trim();
  let gender = $("#gender").val().trim();
  let breed = $("#breed").val().trim();
  let service = $("#service").val().trim();
  let type = $("#type").val().trim();

  let isValid = true;

  // Reset all red borders
  $("#petForm input, #petForm select").removeClass("is-invalid");

  // Validate inputs
  if (name === "") {
    $("#name").addClass("is-invalid");
    isValid = false;
  }
  if (age === "") {
    $("#age").addClass("is-invalid");
    isValid = false;
  }
  if (gender === "") {
    $("#gender").addClass("is-invalid");
    isValid = false;
  }
  if (breed === "") {
    $("#breed").addClass("is-invalid");
    isValid = false;
  }
  if (service === "") {
    $("#service").addClass("is-invalid");
    isValid = false;
  }
  if (type === "") {
    $("#type").addClass("is-invalid");
    isValid = false;
  }

  if (!isValid) return;

  // Create and store new pet
  let newPet = new Pet(name, age, gender, breed, service, type);
  pets.push(newPet);

  // Update UI
  displayPetNames();
  petCount();

  // Clear form and reset styles
  $("#petForm")[0].reset();
  $("#petForm input, #petForm select").removeClass("is-invalid");
}
