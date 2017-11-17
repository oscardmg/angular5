// ng g class /views/operations/operation

export class Operation {
  public _id: string;
  public amount: number = 0;
  public description: string = "";
  public kind: string;
}
