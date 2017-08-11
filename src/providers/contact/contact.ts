import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ContactProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ContactProvider {
  public n1:any;
  public n2:any;
  public n3:any;
  public n4:any;
  public n5:any;

  constructor() {
    console.log('Hello ContactProvider Provider');
  }

}
