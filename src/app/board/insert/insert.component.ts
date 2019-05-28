import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Board } from '../board';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  board:Board = new Board();
  constructor(private _bs:BoardService, private _rt:Router) { }

  ngOnInit() {
  }
  goPage(url:string){
    this._rt.navigate([url]);
  }
  // doInsert():void{
  //   console.log(this.board);
  //   this._bs.saveBoardList(this.board).subscribe(res=>{
  //     if(res.response==1){
  //       alert("차량등록에 성공하셨습니다.");
  //       this.goPage('board');
  //     }else{
  //       alert("차량등록에 실패하셨습니다.");
  //       this.goPage('insert');
  //     }
  //   })
  // }
  doInsert():void{
    this._bs.addBoardInfo(this.board).subscribe(res=>{
      console.log(res);
    })
  }
  getFiles(evt){
    this.board.carFile = evt.target.files[0];
  }

}
