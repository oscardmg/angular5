import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "cf-main",
  template: `
    <main>
      <section>Main content of the applicaction</section>
      <aside>Still a work in progress...</aside>
      <article>... to be continued</article>
    </main>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
