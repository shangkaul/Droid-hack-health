import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HospPage } from '../hosp/hosp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
id:any;
  constructor(public navCtrl: NavController) {

  }

intro()
{
  this.navCtrl.push(HospPage,{id:this.id});
}
}
