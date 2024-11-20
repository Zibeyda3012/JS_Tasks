var Person = /** @class */ (function () {
    function Person(properties) {
        this.name = properties.name;
        this.surname = properties.surname;
        this.email = properties.email;
        this.password = properties.password;
    }
    Person.prototype.getInfo = function () {
        console.log("Fullname: ".concat(this.name + " " + this.surname, " \nEmail: ").concat(this.email));
    };
    Person.prototype.changeEmail = function (newEmail) {
        this.email = newEmail;
    };
    return Person;
}());
var props1 = {
    name: "Zibeyda",
    surname: "Musayeva",
    email: "zibeyda@gmail.com",
    password: "1234z"
};
var person1 = new Person(props1);
person1.getInfo();
person1.changeEmail("musayeva@gmail.com");
person1.getInfo();
