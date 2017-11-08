import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "cf-main",
  template: `
    <p>
      main works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
