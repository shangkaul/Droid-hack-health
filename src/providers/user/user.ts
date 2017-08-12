import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {

uid:any="";
  imageUrl:any="";
  name:any="";
  emails:any="";
  contacts:any;
  addresses:any="";
  aadhars:any="";
  detailss:any="";
  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

}

