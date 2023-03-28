const animalList = document.querySelector("#animal-list");
const animalDetails = document.querySelector("#animal-details");

// Fetch animal data from the server
fetch("http://localhost:3000/characters")
  .then(response => response.json())
  .then(characters => {
    // Loop through each character and add it to the animal list
    characters.forEach(character => {
      const li = document.createElement("li");
      li.textContent = character.name;
      li.addEventListener("click", () => showAnimalDetails(character));
      animalList.appendChild(li);
    });
  });

// Show the details of a selected animal
function showAnimalDetails(character) {
  // Clear the animal details section
  animalDetails.innerHTML = "";

  // Create the HTML elements for the animal details
  const h2 = document.createElement("h2");
  h2.textContent = character.name;

  const img = document.createElement("img");
  img.src = character.image;

  const p = document.createElement("p");
  p.textContent = `Votes: ${character.votes}`;

  const button = document.createElement("button");
  button.textContent = "Add Vote";
  button.addEventListener("click", () => addVote(character));

  // Add the HTML elements to the animal details section
  animalDetails.appendChild(h2);
  animalDetails.appendChild(img);
  animalDetails.appendChild(p);
  animalDetails.appendChild(button);

  // Add class to the animal details section for styling
  animalDetails.classList.add("animal-details-active");
}

// Add a vote for a selected animal
function addVote(character) {
  character.votes++;
  animalDetails.querySelector("p").textContent = `Votes: ${character.votes}`;
}

