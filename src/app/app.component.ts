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
  @ViewChild('myForm') form !: NgForm;

  gender=[
    {id:1, value:'Male'},
    {id:2, value:'Female'},
    {id:3, value: 'Other'}
  ]

  onSubmit(){
    console.log(this.form);
  }


  setDefaultValues() {
    

  this.form.form.patchValue({
    personDetails:{
      firstname:'Hashinie',
      lastname:'Rahul Varma',
      email:'srivaari@gmail.com'
    }
  })

}
}
