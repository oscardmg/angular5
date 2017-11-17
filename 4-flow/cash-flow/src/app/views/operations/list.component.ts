import { Component, OnInit } from "@angular/core";
import { Operation } from "./operation";

@Component({
  selector: "cf-list",
  template: `
  <h2>{{ title | uppercase }}</h2>
  <table *ngIf="numberOfOperations>0;else emptyList">
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
<ng-template #emptyList>
  <h3>No operations yet.</h3>
</ng-template>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  public numberOfOperations = 0;
  public operations: Operation[] = [];
  public title = "List of Operations";
  constructor() {}

  ngOnInit() {}

  public deleteOperation(operation: Operation) {
    const index = this.operations.indexOf(operation);
    this.operations.splice(index, 1);
    this.numberOfOperations = this.operations.length;
  }
}
