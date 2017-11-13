import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cf-operations",
  template: `
    <cf-new></cf-new>
    <cf-list></cf-list>
  `,
  styles: []
})
export class OperationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
