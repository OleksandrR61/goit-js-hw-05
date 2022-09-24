// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен
    // сравнить значения параметра price и приватного статического свойства MAX_PRICE.

    // Если цена автомобиля превышает максимальную, метод должен вернуть строку "Error! Price exceeds the
        // maximum".
    // В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".

// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет
    // использоваться метод checkPrice(price).

class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
    static checkPrice(price) {
        return price > Car.#MAX_PRICE
            ? "Error! Price exceeds the maximum"
            : "Success! Price is within acceptable limits";
    }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

