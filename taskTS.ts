interface PersonProperties {
  name: string;
  surname: string;
  email: string;
  password: string;
}

class Person {
  public name: string;
  public surname: string;
  protected email: string;
  private password: string;

  public constructor(properties: PersonProperties) {
    this.name = properties.name;
    this.surname = properties.surname;
    this.email = properties.email;
    this.password = properties.password;
  }

  public getInfo(): void {
    console.log(
      `Fullname: ${this.name + " " + this.surname} \nEmail: ${this.email}`
    );
  }

  public changeEmail(newEmail: string): void {
    this.email = newEmail;
  }
}

const props1:PersonProperties = {
    name:"Zibeyda",
    surname:"Musayeva",
    email:"zibeyda@gmail.com",
    password:"1234z"
};

const person1 = new Person(props1);

person1.getInfo();
person1.changeEmail("musayeva@gmail.com");
person1.getInfo();
