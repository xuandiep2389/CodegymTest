import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomelistComponent } from './awesomelist/awesomelist.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { AwesomeEditComponent } from './awesome-edit/awesome-edit.component';
import { CreateAwesomeComponent } from './create-awesome/create-awesome.component';

@NgModule({
  declarations: [
    AppComponent,
    AwesomelistComponent,
    AwesomeEditComponent,
    CreateAwesomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
