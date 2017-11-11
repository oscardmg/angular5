import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
