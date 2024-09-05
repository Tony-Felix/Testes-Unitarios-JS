/* eslint-disable max-len */
// Siga as orientações do README!

const testString = (object, string) => {
  let elemento = '';
  if (object.food[string] !== undefined) {
    elemento = string;
    return elemento;
  }
  if (object.drinks[string] !== undefined) {
    elemento = string;
    return elemento;
  }
  elemento = undefined;
  return elemento;
};
const createMenu = (object) => {
  const anotherObject = {
    fetchMenu: () => object,
    consumption: [],
    order: (string) => {
      const elemento = testString(object, string);
      if (elemento !== undefined) {
        anotherObject.consumption.push(elemento);
        return `${elemento} se encontra no menu`;
      } 
      if (elemento === undefined) {
        return 'Item indisponível';
      }
    },
    pay: () => {
      let elemento = 0;
      for (let index = 0; index < anotherObject.consumption.length; index += 1) {
        if (object.food[anotherObject.consumption[index]] !== undefined) {
          elemento += object.food[anotherObject.consumption[index]];
        }
        if (object.drinks[anotherObject.consumption[index]] !== undefined) {
          elemento += object.drinks[anotherObject.consumption[index]];
        }
      }
      
      return elemento + elemento * 0.1;
    },
 };
  return anotherObject;
};

module.exports = createMenu;
