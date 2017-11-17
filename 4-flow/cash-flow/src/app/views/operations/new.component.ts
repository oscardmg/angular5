import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Operation } from "./operation";

@Component({
  selector: "cf-new",
  template: `
  <h2>{{ title | uppercase }}</h2>
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
  `,
  styles: []
})
export class NewComponent implements OnInit {
  @Input() public numberOfOperations = 0;
  @Output() public save = new EventEmitter<Operation>();

  public kindsOfOperations = ["Income", "Expense"];
  public operation: Operation = new Operation();
  public title = "New Operation";

  constructor() {}

  ngOnInit() {}

  public saveOperation() {
    const clonedOperation = this.cloneOperation(this.operation);
    this.save.emit(clonedOperation);
    this.operation = new Operation();
  }

  cloneOperation(originalOperation: Operation): Operation {
    const targetOperation = Object.assign({}, originalOperation);
    return targetOperation;
  }
}
