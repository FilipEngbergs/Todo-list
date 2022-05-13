export class Todo {
  done: boolean;
  constructor(public description: string, public date: string) {
    this.done = false;
  }
}
