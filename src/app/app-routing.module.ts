import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectivesComponent } from './components/directives/directives.component';
import { FirstComponent } from './components/first/first.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  {path: "" , redirectTo:"first",pathMatch: "full"},
  {path: "first" , component: FirstComponent },
  {path: "second" , component: SecondComponent },
  {path: "directives" , component: DirectivesComponent },
  {path: "parent" , component: ParentComponent },
  {path: "navbar" , component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
