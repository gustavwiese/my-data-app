"use strict";

window.addEventListener("load", start);

function start() {
  // const data = getData();
  // showAllCharacters(data);

  const caitlynJenner = {
    name: "Caitlyn Jenner",
    nickname: undefined,
    image: "http://southparkstudios.mtvnimages.com/shared/characters/celebrities/celebrities-caitlyn-jenner.png",
    occupation: "Former olympic athlete, television personality, vice president of the United States",
    age: 73,
    voicedBy: "Trey Parker",
    gender: "Female (former male)",
    religion: "Christian",
    catchPhrase: "Buckle up, buckaroos",
    hairColor: "Brown",
    schoolGrade: undefined,
    episodes: "S14E02, S19E01, S19E02, S19E08, S19E09, S19E10, S20E01, S20E05, S20E06, S20E07, S20E08",
    appearances: 11,
    firstAppearance: "S14E02",
  };
  showCharacter(caitlynJenner);
}

function showCharacter(character) {
  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <article class="grid-item">
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

// function getData() {
//   const data = [];
//   return data;
// }

// function showAllCharacters(list) {}

// function showDialog(character) {}

// function closeDialog() {}

// function getDescription() {}
