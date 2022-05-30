import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  //template: '<h1>In Line template</h1>',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title = "Hello Rahul" 

  clickme = true;

  constructor() {
    		setTimeout(() =>{
      		this.clickme = false;
    		}, 2000);
   }

   changeTitle(){
    this.title="Pat Cash"
  }

  ngOnInit(): void {
  }

}
