import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";
import { TitleComponent } from "./nav/title.component";

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, NavComponent, TitleComponent],
  exports: [FooterComponent, NavComponent]
})
export class ComponentsModule {}
