import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "cf-not-found",
  template: `
    <h1>not Found</h1>
    <h2>404</h2>
    <a routerLink="/">Go home</a>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
