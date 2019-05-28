import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BoardService } from '../board.service';
import { Board } from '../board';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  carNo:number;
  carList:[] = [];
  constructor(private _rta:ActivatedRoute, private _bs:BoardService, private _rt:Router) {

   }
  ngOnInit() {
    this._rta.params.forEach(param=>{
      this.carNo = param['carNo'];
      console.log(this.carNo);
    })
  
    this._bs.getBoardByNo(this.carNo).subscribe(res=>{
      this.carList = res.response;
      console.log(res.response);
      console.log(res.response.carFIle);
    })
  }
  goPage(url:string){
    this._rt.navigate([url]);
  }
}
