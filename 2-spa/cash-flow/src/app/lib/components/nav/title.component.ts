import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "cf-title",
  template: `
    {{ title }}
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class TitleComponent implements OnInit {
  title = "Cash Flow";

  constructor() {}

  ngOnInit() {}
}
