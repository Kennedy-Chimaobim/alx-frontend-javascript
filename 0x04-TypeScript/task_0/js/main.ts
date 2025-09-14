interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "London"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Paris"
};

const studentsList: Student[] = [student1, student2];

// Render a table
const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = table.insertRow();
  row.insertCell().innerText = student.firstName;
  row.insertCell().innerText = student.location;
});

document.body.appendChild(table);
