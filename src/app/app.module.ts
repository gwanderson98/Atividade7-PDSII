import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exemplo11Component } from './exemplo11/exemplo11.component';
import { Exemplo12Component } from './exemplo12/exemplo12.component';
import { Exemplo13Component } from './exemplo13/exemplo13.component';
import { PaiComponentComponent } from './exemplo13/pai-component/pai-component.component';
import { FilhoComponent } from './exemplo13/filho/filho.component';
import { Exemplo14Component } from './exemplo14/exemplo14.component';
import { StockStatusComponent } from './Exemplo14/stock-status/stock-status.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo11Component,
    Exemplo12Component,
    Exemplo13Component,
    PaiComponentComponent,
    FilhoComponent,
    Exemplo14Component,
    StockStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
