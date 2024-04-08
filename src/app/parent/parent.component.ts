import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  c: string | undefined;
  

  dotc(e: string): void{
    this.c= e;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
