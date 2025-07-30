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