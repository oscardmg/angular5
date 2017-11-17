import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
@Component({
  selector: "cf-home",
  template: `
    <main>
      <header>Main content of the Home Page</header>
      <div>Still a work in progress... for Now: {{ now }}</div>
      <div>... to be continued... Tomorrow: {{ tomorrow }}</div>
    </main>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  now = moment().format();
  tomorrow = moment()
    .add(1, "days")
    .format();
  constructor() {}

  ngOnInit() {}
}
