import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OperationsRoutingModule } from "./operations.routing";
import { OperationsComponent } from './operations.component';
import { NewComponent } from './new.component';
import { ListComponent } from './list.component';
import { ItemComponent } from './item.component';

@NgModule({
  imports: [CommonModule, OperationsRoutingModule],
  declarations: [OperationsComponent, NewComponent, ListComponent, ItemComponent]
})
export class OperationsModule {}
