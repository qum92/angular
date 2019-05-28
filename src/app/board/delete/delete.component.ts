import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BoardService } from '../board.service';
import { Board } from '../board';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  carNo:number;
  constructor(private _rta:ActivatedRoute, private _bs:BoardService, private _rt:Router) {

   }
  ngOnInit() {
    this._rta.params.forEach(param=>{
      this.carNo = param['carNo'];
      console.log(this.carNo);
    })
  
    this._bs.deleteBoardList(this.carNo).subscribe(res=>{
      if(res.response==1){
        console.log(res.response);
        alert("게시물을 삭제 하였습니다.");
        this.goPage('board');
      }else{
        alert("에러가 발생하였습니다.");
      }
    })
  }
  goPage(url:string){
    this._rt.navigate([url]);
  }
}
