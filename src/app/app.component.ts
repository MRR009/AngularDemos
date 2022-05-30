import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoproj1';

  constructor(private router: Router){

  }

  onClickParent(){
    this.router.navigate(['/', 'parent']);
  }

  // onClickNavbar(){
  //   this.router.navigateByUrl('/navbar');
  // }
}
