export const typePokemon = (data) => {
  const nameType = [];

  data.foreach((element) => {
    element.type.foreach((singleType) => {
      !nameType.includes(singleType.type.name) &&
        nameType.push(singleType.type.name);
    });
  });

  return nameType;
};
