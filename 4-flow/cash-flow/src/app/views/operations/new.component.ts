import { Component, OnInit } from "@angular/core";
import { Operation } from "./operation";

@Component({
  selector: "cf-new",
  template: `
  <h2>New Operation</h2>
  <form class="container">
    <label for="description">Description</label>
    <input name="description"
          #inputDescription
          [value]="operation.description"
          (change)="operation.description=inputDescription.value"
          type="text" />
    <label for="amount">Amount</label>
    <input name="amount"
          [(ngModel)]="operation.amount"
          type="number"/>
    <label>Kind of Operation</label>
    <select name="kind" [(ngModel)]="operation.kind">
      <option [value]="">Please select a kind</option>
      <option *ngFor="let kind of kindsOfOperations"
            [value]="kind">{{kind}}</option>
    </select>
    <button (click)="saveOperation()">Save</button>
  </form>
  <blockquote>
    Number of Operations:{{ numberOfOperations }}
    <em>Current: {{ operation | json }}</em>
  </blockquote>
  <table>
    <thead>
      <tr>
        <th>Description</th>
        <th>Kind</th>
        <th>Amount</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let operation of operations">
        <td>{{ operation.description }}</td>
        <td>{{ operation.kind }}</td>
        <td>{{ operation.amount | number:'7.2-2' }}</td>
        <td><button (click)="deleteOperation(operation)">Delete</button> </td>
      </tr>
    </tbody>
  </table>
  `,
  styles: []
})
export class NewComponent implements OnInit {
  public kindsOfOperations = ["Income", "Expense"];
  public numberOfOperations = 0;
  public operation: Operation = new Operation();
  public operations: Operation[] = [];

  constructor() {}

  ngOnInit() {}

  public saveOperation() {
    const clonedOperation = this.cloneOperation(this.operation);
    clonedOperation._id = new Date().getTime().toString();
    this.operations.push(clonedOperation);
    this.numberOfOperations = this.operations.length;
    this.operation = new Operation();
  }

  public deleteOperation(operation: Operation) {
    const index = this.operations.indexOf(operation);
    this.operations.splice(index, 1);
    this.numberOfOperations = this.operations.length;
  }

  cloneOperation(originalOperation: Operation): Operation {
    const targetOperation = Object.assign({}, originalOperation);
    return targetOperation;
  }
}
