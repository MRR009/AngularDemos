import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  title = "Welcome" 

  clickme = true;

  constructor() { }

  ngOnInit(): void {
  }

  //bookForm = new FormGroup({})
  
  studentForm = new FormGroup({
    studentId: new FormControl(),
    studentName: new FormControl(),
    studentEmail: new FormControl()
  });

  onSubmit(){
    console.log(this.studentForm.value);
}



}
