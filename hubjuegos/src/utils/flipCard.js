const clickCard = (e) => {
  const pokemonCard = e.currentTarget;
  const [front, back] = getFrontAndBackFromCard(pokemonCard);
  if (front.classList.contains("rotated") || isPaused) {
    return;
  }
  isPaused = true;
  rotateElements([front, back]);
  if (!firstPick) {
    firstPick = pokemonCard;
    isPaused = false;
  } else {
    const secondPokemonName = pokemonCard.dataset.pokename;
    const firstPokemonName = firstPick.dataset.pokename;
    if (firstPokemonName !== secondPokemonName) {
      const [firstFront, firstBack] = getFrontAndBackFromCard(firstPick);
      setTimeout(() => {
        rotateElements([front, back, firstFront, firstBack]);
        firstPick = null;
        isPaused = false;
      }, 500);
    } else {
      matches++;
      if (matches === 8) {
        console.log("WINNER");
      }
      firstPick = null;
      isPaused = false;
    }
  }
};

const getFrontAndBackFromCard = (card) => {
  const front = card.querySelector(".front");
  const back = card.querySelector(".back");
  return [front, back];
};

const rotateElements = (elements) => {
  if (typeof elements !== "object" || !elements.length) return;
  elements.forEach((element) => element.classList.toggle("rotated"));
};
