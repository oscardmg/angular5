import { Component, OnInit } from "@angular/core";
import { Operation } from "./operation";

@Component({
  selector: "cf-operations",
  template: `
    <cf-new 
      [numberOfOperations]="numberOfOperations" 
      (save)="saveOperation($event)">
    </cf-new>
    <cf-list 
      [numberOfOperations]="numberOfOperations" 
      [operations]="operations" 
      (delete)="deleteOperation($event)" >
    </cf-list>
  `,
  styles: []
})
export class OperationsComponent implements OnInit {
  public numberOfOperations = 0;
  public operations: Operation[] = [];
  constructor() {}

  ngOnInit() {}

  public saveOperation(operation: Operation) {
    operation._id = new Date().getTime().toString();
    this.operations.push(operation);
    this.numberOfOperations = this.operations.length;
  }

  public deleteOperation(operation: Operation) {
    const index = this.operations.indexOf(operation);
    this.operations.splice(index, 1);
    this.numberOfOperations = this.operations.length;
  }
}
