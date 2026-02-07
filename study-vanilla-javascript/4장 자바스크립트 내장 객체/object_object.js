let person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 1200;
person.getFullName = function () {
    return this.firstName + " " + this.lastName;
}
console.log(person.getFullName());
