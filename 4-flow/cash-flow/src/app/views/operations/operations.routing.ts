import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OperationsComponent } from "./operations.component";
import { ItemComponent } from "./item.component";

const routes: Routes = [
  {
    path: "",
    component: OperationsComponent
  },
  {
    path: ":id",
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule {}
