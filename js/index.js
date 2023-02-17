let characters = [];

fetch('https://hp-api.onrender.com/api/characters')
  .then((response) => response.json())
  .then((response) => {
    characters = response.filter((eachCharacter) => eachCharacter.image != '' && eachCharacter.house != '' );
    paintCharacterCard(characters);
  });

const inputToFilter = document.querySelector('#inputToFilter');

inputToFilter.addEventListener('keyup', filterCharacters);