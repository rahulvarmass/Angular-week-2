import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './tdform/tdform.component';
import { TemplatedrivenFormComponent } from './templatedriven-form/templatedriven-form.component';
import { TdftComponent } from './tdft/tdft.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    TemplatedrivenFormComponent,
    TdftComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
