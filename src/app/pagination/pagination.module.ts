import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationListComponent } from './pagination-list/pagination-list.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    PaginationListComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PaginationListComponent]
})
export class PaginationModule { }
