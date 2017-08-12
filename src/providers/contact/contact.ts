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
  public n1:any="9619180009";
  public n2:any="9988366466";
  public n3:any="7550172178";
  public n4:any="7554688377";
  public n5:any="9983373745";

  constructor() {
    console.log('Hello ContactProvider Provider');
  }

}
