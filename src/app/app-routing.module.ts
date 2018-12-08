import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomelistComponent} from "./awesomelist/awesomelist.component";

const routes: Routes = [
  {path: 'awesome-list', component: AwesomelistComponent},
  {path: '', redirectTo:'/awesome-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
