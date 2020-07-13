import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './employees/add/add.component';
import { ViewComponent } from './employees/view/view.component';


const routes: Routes = [
  {
    path:'', redirectTo:'', pathMatch:'full'
  },
  {
    path:'add', component:AddComponent
  },
  {
    path:'view', component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
