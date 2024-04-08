import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CoursesComponent } from './courses/courses.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { JvlComponent } from './jvl/jvl.component';
import { FormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { RouterModule, Routes } from '@angular/router';
// import { ErrorComponent } from './error/error.component';


// const appRoute: Routes =[
//   // {path: '', component: HomeComponent},
//   // {path: 'Home', component: HomeComponent},
//   // {path: 'About', component: AboutComponent},
//   // {path: 'Contact', component: ContactComponent},
//   // {path: 'Courses', component: CoursesComponent},
//   // {path: '**', component: ErrorComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    JvlComponent,
    ExampleComponent,
    ChildComponent,
    ParentComponent,
    
    // HomeComponent,
    // AboutComponent,
    // ContactComponent,
    // CoursesComponent,
    // ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    // RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
