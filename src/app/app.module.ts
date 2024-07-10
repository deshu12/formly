import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { Example1Component } from './formly/example1/example1.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Example1Component,
    AppComponent,
   
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    FormlyModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
