import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { BoardService } from '../board/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  constructor(private _bs:BoardService, private _rt:Router) { }

  ngOnInit() {
  }
  goPage(url:string){
    this._rt.navigate([url]);
  }
  doLogin():void{
    console.log(this.user);
    this._bs.selectUserInLogin(this.user).subscribe(res=>{
      console.log(res.response);
      if(res.response=='1'){
        alert("로그인에 성공하셨습니다.");
        this.goPage('home');
      }else{
        alert("아이디와 비밀번호를 확인해주세요.");
        this.goPage('');
      }
    })
  }
}
