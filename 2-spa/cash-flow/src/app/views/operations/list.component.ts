import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cf-list",
  template: `
    <p>
      list works!
    </p>
    <ul>
      <li><a routerLink="/operations/271">Number e</a></li>
      <li><a routerLink="/operations/314">Pi</a></li>
      <li><a routerLink="/operations/667">Gravitational Constant</a></li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
