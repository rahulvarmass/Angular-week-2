import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-templatedriven-form',
  templateUrl: './templatedriven-form.component.html',
  styleUrls: ['./templatedriven-form.component.css']
})
export class TemplatedrivenFormComponent implements OnInit {
// [x: string]: any;
  @ViewChild("of")
  asd!: NgForm;
  e='shaffer@swat.com'
  se: any;
  n:'shafeer' | any

  runIt(){
    console.log(this.asd);
    
  // this.asd.form.get('n').patchValue(this.n)

  
}
  constructor() { }

  ngOnInit(): void {
  }

  runTheSubmitMethod(of: NgForm){
    console.log(of);
  }

}
function patchValue(n: any) {
  throw new Error('Function not implemented.');
}

