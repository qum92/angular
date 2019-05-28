import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Register {
    cuiNo:number
    cuiId:string
    cuiPwd:string
    cuiPwd1:string
    cuiPwd2:string
    cuiName:string
    cuiAge:number
    cuiEmail:string
    constructor(){
    }
}