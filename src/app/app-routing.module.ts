import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AwesomelistComponent} from "./awesomelist/awesomelist.component";
import {AwesomeEditComponent} from "./awesome-edit/awesome-edit.component";

const routes: Routes = [
  {path: 'awesome-list', component: AwesomelistComponent},
  {path: 'awesome/:id/edit', component: AwesomeEditComponent},
  {path: '', redirectTo:'/awesome-list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
