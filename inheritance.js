class Parent {
    constructor() {
        this.fatherName = "S.M. Golam Kibria";
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }

    getFullName() {
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("zuhair");
const baby2 = new Child("Gifari");
console.log(baby.getFullName());