// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и
    // price. Деструктуризируй объект в сигнатуре(подписи) конструктора.

class Car {
  // Change code below this line
    constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
}

