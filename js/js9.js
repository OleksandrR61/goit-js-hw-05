// Добавь классу Car два метода.

    // getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
    // changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на
        // newPrice.

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
    getPrice() {
        return this.price;
    }
    
    changePrice(newPrice) {
        this.price = newPrice;
    }
  // Change code above this line
}

