import { Component } from "@angular/core";

@Component({
  selector: "cf-root",
  template: `
    <cf-nav></cf-nav>
    <router-outlet></router-outlet>
    <cf-footer></cf-footer>  
  `,
  styles: []
})
export class AppComponent {}
