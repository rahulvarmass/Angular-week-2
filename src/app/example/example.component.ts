import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  
  show_sms1: number= 0;
  show_sms2 :number =1;
  show_sms3: boolean= true;

  constructor() { }

 
  
  ngOnInit(): void {
  }

}


