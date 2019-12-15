import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemAlertComponent } from './item-alert/item-alert.component';
import { DataService } from "./data.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { OneJobDisplayComponent } from './one-job-display/one-job-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ItemListComponent,
    ItemAlertComponent,
    OneJobDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ItemListComponent },
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
