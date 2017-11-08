import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { NavComponent } from "./nav/nav.component";
import { TitleComponent } from "./nav/title.component";

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, MainComponent, NavComponent, TitleComponent],
  exports: [FooterComponent, MainComponent, NavComponent]
})
export class ComponentsModule {}
