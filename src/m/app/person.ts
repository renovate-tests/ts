interface Person {
  name: string
  getName(): string
}

class Person {
  constructor (name: string) {
    this.name = name
  }
  public getName (): string {
    return this.name
  }
}

export default Person
