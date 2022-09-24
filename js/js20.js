// Добавь классу Admin следующие свойства и методы.

    // Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей.
        // Значение по умолчанию это пустой массив.
    // Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение
        // параметра email в массив хранящийся в свойстве blacklistedEmails.
    // Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие
        // значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или
        // false.

// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в
    // которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line
    blacklistedEmails = [];

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    }
    
    blacklist(email) {
        this.blacklistedEmails.push(email);
    } 
    
    isBlacklisted(email) {
        return this.blacklistedEmails.some(element => element === email);
    }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});