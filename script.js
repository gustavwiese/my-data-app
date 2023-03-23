"use strict";

window.addEventListener("load", start);

async function start() {
  const caitlynJenner = await getCharacter(
    "https://raw.githubusercontent.com/gustavwiese/my-data-app/main/caitlynJenner.json"
  );
  showCharacter(caitlynJenner);
  showCharacter(caitlynJenner);
  showCharacter(caitlynJenner);
  showCharacter(caitlynJenner);
  showCharacter(caitlynJenner);
  showCharacter(caitlynJenner);
  showCharacter(caitlynJenner);
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
          <p>${character.age + " " + "years old"}</p>
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
  document.querySelector("#dialog_religion").textContent = character.religion;

  // description
  let description = generateDescription(character);
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

function generateDescription(character) {
  let description = "";
  if (character.hogwartsStaff && character.alive) {
    description = `${character.name} is employed at Hogwarts.`;
  } else if (character.hogwartsStaff && !character.alive) {
    description = `${character.name} was employed at Hogwarts but is no longer alive.`;
  } else if (character.hogwartsStudent && character.alive) {
    description = `${character.name} is a student at Hogwarts.`;
  } else if (character.hogwartsStudent && !character.alive) {
    description = `${character.name} was a student at Hogwarts but is no longer alive.`;
  }
  return description;
}
