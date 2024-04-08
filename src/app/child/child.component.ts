import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() a= new EventEmitter<string>();

  b(): void{
    this.a.emit('the message');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
