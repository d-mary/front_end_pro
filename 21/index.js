function Student(name, lastName, birthYear, marks) {
  this.name = name;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.marks = marks;
  this.attendance = new Array(25);
  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };
  this.getAverageMark = function () {
    const sum = this.marks.reduce((total, mark) => total + mark, 0);
    return sum / this.marks.length;
  };
  this.present = function () {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = true;
        break;
      }
    }
  };

  this.absent = function () {
    for (let i = 0; i < this.attendance.length; i++) {
      if (this.attendance[i] === undefined) {
        this.attendance[i] = false;
        break;
      }
    }
  };

  this.summary = function () {
    const averageMark = this.getAverageMark();
    const attendanceQuantity = this.attendance.filter(
      (value) => value !== undefined
    ).length;
    const ratingStudent = attendanceQuantity / this.attendance.length;

    if (averageMark > 90 && ratingStudent > 0.9) {
      return "Молодець!";
    } else if (averageMark > 90 || ratingStudent > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}

const student1 = new Student("Петро", "Кононенко", 1997, [99, 99, 92, 98, 91]);

for (let i = 0; i < 24; i++) student1.present();

console.log(
  `${student1.name} ${student1.lastName}${":"} ${student1.summary()}`
);

console.log(
  `${student1.name} ${student1.lastName}${":"} ${"вік"} ${student1.getAge()}`
);

console.log(
  `${student1.name} ${
    student1.lastName
  }${":"} ${"середня оцінка"} ${student1.getAverageMark()}`
);

const student2 = new Student("Анна", "Григоренко", 1995, [60, 87, 62, 98, 61]);

student2.present();

student2.absent();
student2.absent();
student2.absent();
student2.absent();

console.log(
  `${student2.name} ${student2.lastName}${":"} ${student2.summary()}`
);

console.log(
  `${student2.name} ${student2.lastName}${":"} ${"вік"} ${student2.getAge()}`
);

console.log(
  `${student2.name} ${
    student2.lastName
  }${":"} ${"середня оцінка"} ${student2.getAverageMark()}`
);

const student3 = new Student("Катя", "Шевченко", 2005, [90, 97, 82, 88, 99]);

student3.present();
student3.present();
student3.present();

student3.absent();

console.log(
  `${student3.name} ${student3.lastName}${":"} ${student3.summary()}`
);

console.log(
  `${student3.name} ${student3.lastName}${":"} ${"вік"} ${student3.getAge()}`
);

console.log(
  `${student3.name} ${
    student3.lastName
  }${":"} ${"середня оцінка"} ${student3.getAverageMark()}`
);
