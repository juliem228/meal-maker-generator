const menu = {
  _courses: {
    appetizers: [] , 
    mains: [] ,
    desserts: [] ,
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizersIn){
    this._courses.appetizers = appetizersIn;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },
  get courses() {
    return {
     appetizers: this._courses.appetizers,
     mains: this._courses.mains,
     desserts: this._courses.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName].push(dish);
  }, 
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `You will be having ${appetizer.name} as an appetizer, ${main.name} as your main course, and ${dessert.name} for dessert. The price is ${totalPrice}. Pay up bitch.`;
  }
}
// below are lists of menu items
//appetizers
menu.addDishToCourse('appetizers', 'mozzarella sticks', 5.50);
menu.addDishToCourse('appetizers', 'fried pickles', 5.25);
menu.addDishToCourse('appetizers', 'buffalo wings', 7.50);
menu.addDishToCourse('appetizers', 'spring rolls', 6.50);
menu.addDishToCourse('appetizers', 'spin dip', 6.50);
//mains
menu.addDishToCourse('mains', 'steak', 25.50);
menu.addDishToCourse('mains', 'roasted chicken', 18.95);
menu.addDishToCourse('mains', 'caesar salad', 12.25);
menu.addDishToCourse('mains', 'BLT', 10.50);
menu.addDishToCourse('mains', 'cheeseburger', 15.25);
//desserts
menu.addDishToCourse('desserts', 'tiramisu', 9.95);
menu.addDishToCourse('desserts', 'brownie sundae', 7.45);
menu.addDishToCourse('desserts', 'icecream sundae', 6.50);
menu.addDishToCourse('desserts', 'banana split', 7.75);
menu.addDishToCourse('desserts', 'cupcakes', 3.75);
menu.addDishToCourse('desserts', 'chocolate mousse', 7.50);

let meal = menu.generateRandomMeal();
console.log(meal);
