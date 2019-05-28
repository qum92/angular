import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board/board.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Register } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:Register = new Register();
  constructor(private _bt:BoardService, private _rt:Router, private _rta:ActivatedRoute) { }

  ngOnInit() {
  }
  goPage(url:string){
    this._rt.navigate([url]);
  }
  doCheckId():void{
    console.log(this.user);
    this._bt.selectUserId(this.user).subscribe(res=>{
      console.log(res.response);
    if(res.response==1){
      alert("중복된 아이디 입니다.");
    }else{
      alert("사용가능한 아이디입니다.");
    }
    })
    }
    doCheckPwd():void{
      if(this.user.cuiPwd1==this.user.cuiPwd2 &&
        this.user.cuiPwd2==this.user.cuiPwd1){
        return;
      }else{
        alert("비밀번호를 다시 확인해주세요.");
      }
    }
    doRegister():void{
      console.log(this.user);
      this._bt.registerUser(this.user).subscribe(res=>{
        console.log(res.response);
        if(res.response==1){
          alert("회원가입에 성공하셨습니다.");
          this.goPage('');
        }else{
          alert("오류가 발생하셨습니다.");
          this.goPage('register');
        }
      })
    }
  }
