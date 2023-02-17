const paintCharacterCard = (results) => {
    const character = results;
    let card = '';
    character.forEach((character, index) => {
      card = card + `<div class="card ${ character.house.toLowerCase() }"><img src="${ character.image }"><p>${ character.name }</p><p>${ character.house }</p></div>`;
    });
  
    document.querySelector('#card-section').innerHTML = card;
  
}

const filterCharacters = () => {
const inputValue = inputToFilter.value;
paintCharacterCard(characters.filter((character) => character.name.toLowerCase().includes(inputValue)))
}