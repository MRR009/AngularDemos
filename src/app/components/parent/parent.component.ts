import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public bookName: string = '';
  public publisher: string = '';

  /** *********************@output child to parent ******************/


 /* public bookName = '';
  	public publisher = '';

  	bookEvent($event: any) {
    		this.bookName = $event;
  	}

  	publishEvent($event: any) {
    		this.publisher = $event;
  	} */

/* ******************** @ViewChild Child to Parent ****************************** */

    // @ViewChild(Child1Component)
  	// child1: Child1Component = new Child1Component;
  	// @ViewChild(Child2Component) child2: Child2Component = new Child2Component;

  	// bookInfo1: any = {
    // 		bookName: '',
    // 		publisher: ''
  	// };

  	// bookInfo2: any = {
    // 		bookName: '',
    // 		publisher: ''
  	// };


  	// ngAfterViewInit() {
   	// 	this.bookInfo1 = this.child1.bookInfo;
    // 		this.bookInfo2 = this.child2.bookInfo;
  	// }

    

  constructor() { }

  ngOnInit(): void {
  }

}
