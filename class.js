class Student {
    // এই constructor  একটা function'র মত
    constructor(studentId, studentsName) {
        this.id = studentId;
        this.name = studentsName;
        this.school = "St. Paul's High School";
    }
}
const student1 = new Student(12, "faria");
const student2 = new Student(13, "zuhair");
console.log(student1, student2);