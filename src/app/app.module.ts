import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesComponent } from './courses/courses.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';


const appRoute: Routes =[
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'Courses', component: CoursesComponent},
  {path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
