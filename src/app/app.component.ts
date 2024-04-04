import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-week-2';
  defaultCountry= 'india';
  firstname!: string;
  lastname!: string;  
  email!: string;
  gen!: string;
  genderValue: string= ''
  country!: string;
  @ViewChild('myForm') form!: NgForm;

  gender=[
    {id:1, value:'Male'},
    {id:2, value:'Female'},
    {id:3, value: 'Other'}
  ]

  onSubmit(){
    console.log(this.form);

    this.firstname= this.form.value.personDetails.firstname;
    this.lastname= this.form.value.personDetails.lastname;
    this.email= this.form.value.personDetails.email;
    this.gen= this.form.value.personDetails.gender;
    this.country= this.form.value.personDetails.country;
    this.form.reset();


  }


  setDefaultValues() {
    

  this.form.form.patchValue({
    personDetails:{
      firstname:'sudharshan',
      lastname:'kamalesh',
      email:'sabari@gamil.com'
    }
  })

}
}
