# WK2: Code Challenge
*****
### Author : SHEILA SERUYA MBALO 20/03/2023
****
## Project Description
Okay, let's break down this code line by line:

const animalList = document.querySelector("#animal-list");
This line is declaring a variable named animalList that is assigned the HTML element with an ID of animal-list.

const animalDetails = document.querySelector("#animal-details");
This line is declaring another variable named animalDetails that is assigned the HTML element with an ID of animal-details.

fetch("http://localhost:3000/characters")
This line is making a request to a server at the specified URL to get a list of characters.

.then(response => response.json())
This line is waiting for the response from the server and then converting it to a JavaScript object.

.then(characters => {
This line is taking the array of characters that was just retrieved from the server and performing some actions on each one.

characters.forEach(character => {
This line is iterating over each character in the characters array.

const li = document.createElement("li");
This line is creating a new HTML li element.

li.textContent = character.name;
This line is setting the text content of the new li element to the name of the current character.

li.addEventListener("click", () => showAnimalDetails(character));
This line is adding an event listener to the li element so that when it is clicked, it will call the showAnimalDetails function with the current character as an argument.

animalList.appendChild(li);
This line is adding the new li element to the animalList HTML element.

});
This line is closing the forEach loop.

});
This line is closing the second then block.

function showAnimalDetails(character) {
This line is defining a new function called showAnimalDetails that takes a character as an argument.

animalDetails.innerHTML = "";
This line is clearing out any existing HTML content inside the animalDetails HTML element.

const h2 = document.createElement("h2");
This line is creating a new HTML h2 element.

h2.textContent = character.name;
This line is setting the text content of the new h2 element to the name of the current character.

const img = document.createElement("img");
This line is creating a new HTML img element.

img.src = character.image;
This line is setting the src attribute of the new img element to the image URL of the current character.

const p = document.createElement("p");
This line is creating a new HTML p element.

p.textContent = `Votes: ${character.votes}`;
This line is setting the text content of the new p element to display the number of votes for the current character.

const button = document.createElement("button");
This line is creating a new HTML button element.

button.textContent = "Add Vote";
This line is setting the text content of the new button element to "Add Vote".

button.addEventListener("click", () => addVote(character));
This line is adding an event listener to the button element so that when it is clicked, it will call the addVote function with the current character as an argument.

animalDetails.appendChild(h2);
animalDetails.appendChild(img);
animalDetails.appendChild(p);

These four lines of code are adding the newly created h2, img, p, and button elements to the animalDetails HTML element. This will display the details of the currently selected character on the web page.

animalDetails.classList.add("animal-details-active");
This line is adding a CSS class of animal-details-active to the animalDetails HTML element. This class will be used for styling purposes.

}
This line is closing the showAnimalDetails function.

function addVote(character) {
This line is defining a new function called addVote that takes a character as an argument.

character.votes++;
This line is incrementing the votes property of the current character.

animalDetails.querySelector("p").textContent = `Votes: ${character.votes}`;
This line is updating the text content of the p element inside the animalDetails HTML element to display the new vote count for the current character.

}
This line is closing the addVote function.

Overall, this code fetches a list of characters from a server and displays them as a list of clickable items on the web page. When a user clicks on an item, it displays the details of the corresponding character, including their image, name, and vote count. The user can also click a button to add a vote for the displayed character, which updates the vote count on the web page.

    ******

## SCREENSHOTS


********
## SetUp Instruction
### Requirements
* [Lang](lang Url)
* [Framework](Framework URL)
* Text editor [Visual Studio Code](https://code.visualstudio.com/download)
* [Testing Platform](Platform URL)


### Getting Files
* Fork the repo
- Create a new branch in your terminal (git checkout -b improve-feature)
- Install the prerequisites
- Make appropriate changes in file(s)
- Run the server to see the changes
- Add the changes and commit them (git commit -am "Improve App")
- Push to the branch (git push origin improve-app)
- Create a Pull request
* Open the folder location on terminal and use the following command to run app:

## How To Run It

*****
## Live Link
Or you can access the web application directly via this [LINK.](http://127.0.0.1:5503/index.html)
*****
## Dependencies

*****
## Technologies Used
1. HTML
2. CSS
3. JavaScript
*****
## Contact Information
* Email : Sheilaseruya@gmail.com
*****
## [License](LICENSE)
MIT License
Copyright (c) YEAR Author
