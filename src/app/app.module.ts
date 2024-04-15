import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './tdform/tdform.component';
import { TemplatedrivenFormComponent } from './templatedriven-form/templatedriven-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    TemplatedrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
