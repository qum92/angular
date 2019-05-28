import { Component, OnInit } from '@angular/core';
import { BoardService} from './board.service';
import { Board } from './board';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board:Board;
  boardList:Board[] = [];
  constructor(private _bs:BoardService, private _rt:Router) { 
    this.findList(null);
  }
  findList(boardList:Board){
    this._bs.getBoardList(boardList).subscribe(res=>{
      this.boardList=res.response;
    })
  }

  ngOnInit() {
  }

  goPage(url:string){
    this._rt.navigate([url]);
  }
  doInsert(){
    this.goPage('insert');
  }
}
