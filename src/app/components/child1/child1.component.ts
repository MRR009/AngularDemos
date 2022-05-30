import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  // @Input() parentsBookName = '';
  // @Input() parentsBookPublisher = '';

/*  @Output() bookEvent = new EventEmitter<string>();
  @Output() publishEvent = new EventEmitter<string>();

  bookName: string = "";
  publisher: string = "";

  onBookChange() {
      this.bookEvent.emit(this.bookName);
  }

  onPublisherChange() {
      this.publishEvent.emit(this.publisher);
  }  */

  bookInfo: any = {
    bookName: '',
    publisher: ''
};


  constructor() { }

  ngOnInit(): void {
  }

}
