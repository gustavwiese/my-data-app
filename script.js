"use strict";

window.addEventListener("load", start);

async function start() {
  const characters = await getCharacter("data/characters.json");
  characters.forEach(showCharacter);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

function showCharacter(character) {
  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
      <article class="grid_item">
          <img src="${character.image}">
          <h2>${character.name}</h2>
          <p>Age: ${character.age}</p>
      </article>
        `
  );
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    showCharacterModal(character);
  }
}

function showCharacterModal(character) {
  console.log(character);
  document.querySelector("#dialog_image").src = character.image;
  document.querySelector("#dialog_title").textContent = character.name;
  document.querySelector("#dialog_religion").textContent = "Religion: " + character.religion;

  // description
  let description = character.name + " is a character in South Park";
  document.querySelector("#dialog_character_description").textContent = description;

  document.querySelector("#dialog_gender").textContent = character.gender;
  document.querySelector("#dialog_hair_color").textContent = character.hairColor;
  document.querySelector("#dialog_occupation").textContent = character.occupation;
  document.querySelector("#dialog_catchphrase").textContent = character.catchPhrase;
  document.querySelector("#dialog_appearances").textContent = character.appearances;
  document.querySelector("#dialog_first_appearance").textContent = character.firstAppearance;

  document.querySelector("#dialog_name").textContent = character.name;
  document.querySelector("#dialog_voiced_by_name").textContent = character.voicedBy;

  // show dialog
  document.querySelector("#dialog_character").showModal();
}
