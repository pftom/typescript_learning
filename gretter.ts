// based on both the structure of your code, 
// and the type annotations you provide.
function greeter(person: string) {
  return 'Hello, ' + person;
}

let user = '1';
document.body.innerHTML = greeter(user);