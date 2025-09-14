/* Task 1: Teacher interface */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // allow extra attributes
}

/* Task 2: Director interface extending Teacher */
interface Director extends Teacher {
  numberOfReports: number;
}

/* Task 3: printTeacher function and interface */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

/* Task 4: StudentClass interface and class */
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

/* Example instances (optional) */
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  yearsOfExperience: 5,
  contract: false
};

const director1: Director = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Paris',
  numberOfReports: 10
};

const student1 = new StudentClass('Alice', 'Johnson');
console.log(printTeacher('John', 'Doe')); // -> J. Doe
console.log(student1.displayName()); // -> Alice
console.log(student1.workOnHomework()); // -> Currently working
