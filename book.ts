class Book {
  static publisher: string = 'Packet Pub';
  constructor(public author: string, public title: string, public length: number) {}
  getFullTitle(): string {
    return `${this.title} by ${this.author}`;
  }
}

class TypeScript extends Book {
}

const typeScript = new TypeScript('2', '2', 1);


