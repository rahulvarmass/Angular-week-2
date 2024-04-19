import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tdft-root',
  templateUrl: './tdft.component.html',
  styleUrls: ['./tdft.component.css']
})
export class TdftComponent {
// [x: string]: any;
  form: any;
  showAdditionalFormControls = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: '',
      number: '',
      date: '',
      time: '',
      url: '',
      checkbox: '',
      radiobutton: '',
      hidden: '',
      search: '',
      color: '',
      range: '',
      select: '',
      textarea: ''
    });
  }

  checkWordCount() {
    const name = this.form.get('name')?.value;
    const wordCount = name.split(' ').length;
    this.showAdditionalFormControls = (wordCount === 16);
  }

  ngOnInit() {
    
    this.form.patchValue({
      email: 'example@example.com',
      number: 123456,
      date: '2022-01-01',
      time: '12:00',
      url: 'http://example.com',
      checkbox: true,
      radiobutton: 'option1',
      hidden: 'hidden value',
      search: 'search value',
      color: '#ff0000',
      range: 50,
      select: 'option2',
      textarea: 'sdfghjnk'
    });
  }

  onSubmit() {
    
  }
}
