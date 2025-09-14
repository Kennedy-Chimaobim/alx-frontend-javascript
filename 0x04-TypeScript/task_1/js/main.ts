interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "young",
  fullTimeEmployee: false,
  location: "Lagos",
  contract: true,
};

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Abuja",
  numberOfReports: 17,
};

interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass {
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