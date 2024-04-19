import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  email= new FormControl('real@email.com', Validators.required);
  runTheClick(){

    console.log('form submitted!');
    console.log(this.email.valid);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
