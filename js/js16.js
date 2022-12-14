// Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 -
    // максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE,
    // сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

class Car {
  // Change code below this line
    #price;
    static MAX_PRICE = 50000;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

    set price(newPrice) {
        if (newPrice <= Car.MAX_PRICE) {
            this.#price = newPrice;
        }
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

