interface Person {
  name: string
  getName(): string
}

export class Person {
  constructor (name: string) {
    this.name = name
  }
  public getName (): string {
    return this.name
  }
}
