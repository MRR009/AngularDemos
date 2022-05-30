import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 /* @Input('myBook') book  ='';
  @Input('myPub') publisher =''; */

bookInfo: any = {
  bookName: '',
  publisher: ''
};

  constructor() { }

  ngOnInit(): void {
  }

}
