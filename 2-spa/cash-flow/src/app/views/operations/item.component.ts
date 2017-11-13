import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "cf-item",
  template: `
  <p>
    item works!
  </p>
  <h3>{{ _id }}</h3>
  `,
  styles: []
})
export class ItemComponent implements OnInit {
  _id: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this._id = this.route.snapshot.params["id"];
  }
}
