let infoPokeMatch = {
  firstPick: "",
  isPaused: true,
  matches: 0,
};

export const getInfoPokeMatch = () => infoPokeMatch;

export let setFirstPick = (data) => (infoPokeMatch.firstPick = data);
export let setIsPaused = (data) => (infoPokeMatch.isPaused = data);
export let setMatches = (data) => (infoPokeMatch.matches = data);
