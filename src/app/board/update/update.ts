import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class Update {
    carCompany:string;
    carCountry:string;
    carType:string;
    carModel:string;
    carYear:number;
    carEngine:string;
    carSale:number;
    carOil:string;
    carMethod:string;
    carPerson:string;
    constructor(){
    }
}
