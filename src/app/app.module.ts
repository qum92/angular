import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { InsertComponent } from './board/insert/insert.component';
import { UpdateComponent } from './board/update/update.component';
import { ViewComponent } from './board/view/view.component';
import { DeleteComponent } from './board/delete/delete.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HomeComponent,
    InsertComponent,
    UpdateComponent,
    ViewComponent,
    DeleteComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
