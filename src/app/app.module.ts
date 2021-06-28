import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaginationModule } from './pagination/pagination.module';
import { AfnarquiPaginationModule } from 'projects/afnarqui-pagination/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PaginationModule,
    AfnarquiPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
