// Pet array to store registered pets
let pets = [];

// Pet constructor function
function Pet(name, age, gender, breed, service, type) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.breed = breed;
  this.service = service;
  this.type = type;
}

// Function to register a new pet
function register(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value.trim();
  const breed = document.getElementById('breed').value.trim();
  const service = document.getElementById('service').value;
  const type = document.getElementById('type').value;

  // Create new pet object
  const newPet = new Pet(name, age, gender, breed, service, type);
  
  // Add to pets array
  pets.push(newPet);
  
  // Update displays
  updatePetCount();
  updatePetNamesList();
  
  // Clear form
  document.getElementById('petForm').reset();
  
  // Show success message
  alert(`${name} has been registered successfully!`);
  
  console.log('Registered pets:', pets);
}

// Function to count pets
function petCount() {
  updatePetCount();
}

// Function to update pet count display
function updatePetCount() {
  const answerField = document.getElementById('answerField');
  if (answerField) {
    answerField.textContent = pets.length;
  }
}

// Function to update pet names list
function updatePetNamesList() {
  const petNamesList = document.getElementById('petNamesList');
  if (petNamesList) {
    petNamesList.innerHTML = '';
    pets.forEach(pet => {
      const li = document.createElement('li');
      li.textContent = `${pet.name} (${pet.type})`;
      petNamesList.appendChild(li);
    });
  }
}

// Initialize displays on page load
$(document).ready(function() {
  updatePetCount();
  updatePetNamesList();
});

// Theme toggle functionality
$(document).ready(function() {
  const themeToggle = $('#theme-toggle');
  const body = $('body');
  
  // Check for saved theme preference or default to light mode
  const currentTheme = sessionStorage.getItem('theme') || 'light';
  
  // Apply the current theme on page load
  if (currentTheme === 'dark') {
    body.addClass('dark');
    themeToggle.html('☀️ Light').attr('aria-pressed', 'true');
  } else {
    body.removeClass('dark');
    themeToggle.html('🌙 Dark').attr('aria-pressed', 'false');
  }
  
  // Theme toggle click handler
  themeToggle.click(function() {
    if (body.hasClass('dark')) {
      // Switch to light mode
      body.removeClass('dark');
      themeToggle.html('🌙 Dark').attr('aria-pressed', 'false');
      sessionStorage.setItem('theme', 'light');
    } else {
      // Switch to dark mode
      body.addClass('dark');
      themeToggle.html('☀️ Light').attr('aria-pressed', 'true');
      sessionStorage.setItem('theme', 'dark');
    }
  });
});