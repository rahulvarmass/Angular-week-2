import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TemplateFormComponent {
  formData: any = {};

  submittheForm(form: NgForm): void {
    if (form.valid) {
      
      console.log('Form submitted:', this.formData);
    } else {
      
    }
  }
}