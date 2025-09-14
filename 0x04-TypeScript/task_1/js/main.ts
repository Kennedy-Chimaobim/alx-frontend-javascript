/* Task 1: Teacher interface */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows extra properties like contract
}

/* Task 2: Director interface (singular!) */
interface Director extends Teacher {
  numberOfReports: number;
}

/* Example Director object */
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17
};

console.log(director1);

/* Task 3: printTeacher function and interface */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Defined as a regular function, not arrow
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

/* Test printTeacher */
console.log(printTeacher("John", "Doe")); // J. Doe

/* Task 4: StudentClass with constructor interface and class interface */
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
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
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

/* Test StudentClass */
const student = new StudentClass("Alice", "Smith");
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working
