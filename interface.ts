// In TypeScript, two types are compatible 
// if their internal structure is compatible.
interface Person {
  firstName: string;
  lastName: string;
}

function gretter(person: Person): string {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

let user = {firstName: 'Jane', lastName: 'User'};

document.body.innerHTML = gretter(user);

let a = null;
a = 2;

class News {
  public channelNumber: number;
  public newsTitle: string;
  private author: string = 'ESPN';

  format(): string {
    return `${this.channelNumber} : ${this.newsTitle} was written by ${this.author}`;
  }
}

let espn = new News();
espn.channelNumber = 1
espn.newsTitle = 'NFL Today';
console.log(espn.format());

class Base {
  protected id: number = 2;
}

class Child extends Base {
  name: string;
  details(): string {
    return `${name} has id: ${this.id}`;
  }
}

const newChild = new Child();

class HelloWorld {
  readonly name: string = 'John';

  changeName() {
    name = 'Jane';
  }
}