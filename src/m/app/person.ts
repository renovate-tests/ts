class Person {
  private name: string;
  initialize (name: string) {
    this.name = name
  }
  public getName (): string {
    return name
  }
}

export default Person
