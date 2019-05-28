import { Injectable } from '@angular/core';
import { Board } from './board';
import { ajax } from 'rxjs/ajax';
import { Update } from './update/update';
import { User } from '../login/user';
import { Register } from '../register/register'
import { HttpClient,
         HttpRequest,
         HttpEventType,
         HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private url:string = 'http://192.168.0.16:88/';
  constructor(private _http:HttpClient) { }
  getBoardList(board:Board){
    return ajax.get(this.url+'carlist');
  }
  getBoardByNo(carNo:number){
    return ajax.get(this.url+'carbyno?carNo='+carNo);
  }
  saveBoardList(board:Board){
    return ajax.post(this.url+'car/insert',{
      'carCompany':board.carCompany,
      'carCountry':board.carCountry,
      'carType':board.carType,
      'carModel':board.carModel,
      'carYear':board.carYear,
      'carEngine':board.carEngine,
      'carSale':board.carSale,
      'carOil':board.carOil,
      'carMethod':board.carMethod,
      'carPerson':board.carPerson
    },{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'});
  }
  updateBoardList(update:Update,carNo:number){
    return ajax.put(this.url+'car/update',{
      'carNo':carNo,
      'carCompany':update.carCompany,
      'carCountry':update.carCountry,
      'carType':update.carType,
      'carModel':update.carModel,
      'carYear':update.carYear,
      'carEngine':update.carEngine,
      'carSale':update.carSale,
      'carOil':update.carOil,
      'carMethod':update.carMethod,
      'carPerson':update.carPerson
    },{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'});
  }
  deleteBoardList(carNo:number){
    return ajax.put(this.url+'car/delete',{'carNo':carNo},{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'});
  }
  selectUserInLogin(user:User){
    return ajax.put(this.url+'caruser/login',{
      'cuiId':user.cuiId,
      'cuiPwd':user.cuiPwd
    },{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'});
  }
  selectUserId(user:Register){
    return ajax.put(this.url+'caruser/idp',{'cuiId':user.cuiId},{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'});
  }
  registerUser(user:Register){
    return ajax.post(this.url+'caruser/insert',{
      'cuiId':user.cuiId,
      'cuiPwd':user.cuiPwd2,
      'cuiName':user.cuiName,
      'cuiAge':user.cuiAge,
      'cuiEmail':user.cuiEmail
    },{'Content-Type':'application/json','rxjs-custom-header':'Rxjs'});
  }
  addBoardInfo(board:Board){
    const url = this.url + 'caruserinfo';
    const formData = new FormData();
    for(var key in  board){
      formData.append(key, board[key]);
    }
    console.log(formData);
    const req = new HttpRequest('POST', url, formData);
    return this._http.request(req);
  }
}
