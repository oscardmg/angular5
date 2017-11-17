import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
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
  @Input() public numberOfOperations = 0;
  @Input() public operations: Operation[] = [];
  @Output() public delete = new EventEmitter<Operation>();

  public title = "List of Operations";
  constructor() {}

  ngOnInit() {}

  public deleteOperation(operation: Operation) {
    this.delete.emit(operation);
  }
}
