import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './board/insert/insert.component';
import { ViewComponent } from './board/view/view.component';
import { DeleteComponent } from './board/delete/delete.component';
import { UpdateComponent } from './board/update/update.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'board',component:BoardComponent},
  {path:'home',component:HomeComponent},
  {path:'insert',component:InsertComponent},
  {path:'view/:carNo',component:ViewComponent},
  {path:'delete/:carNo',component:DeleteComponent},
  {path:'update/:carNo',component:UpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }