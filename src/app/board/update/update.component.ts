import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Update } from './update';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  carNo:number;
  carList:[] = [];
  update:Update = new Update();
  constructor(private _rta:ActivatedRoute, private _bs:BoardService, private _rt:Router) { }

  ngOnInit() {
    this._rta.params.forEach(param=>{
      this.carNo = param['carNo'];
      console.log(this.carNo)})
      
    this._bs.getBoardByNo(this.carNo).subscribe(res=>{
        this.carList = res.response;
        console.log(res.response);
      })
    }
  
  goPage(url:string){
    this._rt.navigate([url]);
  }
  doUpdate():void{
    console.log(this.update);
    this._bs.updateBoardList(this.update,this.carNo).subscribe(res=>{
      if(res.response==1) {
        alert("수정되었습니다.");
        this.goPage('board');
      }else{
        alert("에러가 발생하였습니다.");
        this.goPage('update');
      }
    })
  }
}
