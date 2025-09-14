// --------------------
// 1. Teacher interface
// --------------------
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allow extra props
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3);

// --------------------
// 2. Director interface
// --------------------
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'New York',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// --------------------
// 3. printTeacher function
// --------------------
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // J. Doe

// --------------------
// 4. StudentClass
// --------------------
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example
const student = new StudentClass("Kenny", "Chimaobim");
console.log(student.displayName());   // Kenny
console.log(student.workOnHomework()); // Currently working
