// In TypeScript, two types are compatible 
// if their internal structure is compatible.
interface Person {
  firstName: string;
  lastName: string;
}

function gretter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = {firstName: 'Jane', lastName: 'User'};

document.body.innerHTML = gretter(user);