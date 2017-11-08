import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "cf-nav",
  template: `
    <nav>
      <cf-title></cf-title>
    </nav>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
