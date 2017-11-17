import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cf-list",
  template: `
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
  constructor() {}

  ngOnInit() {}
}
