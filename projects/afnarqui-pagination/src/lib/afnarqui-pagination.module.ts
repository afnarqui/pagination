import { NgModule } from '@angular/core';
import { AfnarquiPaginationComponent } from './afnarqui-pagination.component';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
  declarations: [
    AfnarquiPaginationComponent
  ],
  imports: [
    PaginationModule
  ],
  exports: [
    AfnarquiPaginationComponent,
  ]
})
export class AfnarquiPaginationModule { }
