function logger(name: string) {
  return function (target: Function) {
    console.log(`Class is: ${name}`);
  }
}

@logger('TypeScript')
class BookOne {
  constructor(private title: string) {}
}

function loggerCover(name: string) {
  return function <newFunction extends Function> (target: newFunction): newFunction {
    let newConstructor: Function;

    return <newFunction> newConstructor;
  }
}