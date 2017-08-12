import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FracturePage } from '../fracture/fracture';
import {SnakePage } from '../snake/snake';
import {WoundsPage } from '../wounds/wounds';
import {BurnsPage } from '../burns/burns';
import {FeverPage } from '../fever/fever';
import {HeatPage } from '../heat/heat';

/**
 * Generated class for the GridPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html',
})
export class GridPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GridPage');
  }
 clickme1(){
   this.navCtrl.push(FracturePage);
 }
clickme2(){
  this.navCtrl.push(SnakePage);
}
clickme3(){
  this.navCtrl.push(WoundsPage);
}
clickme4(){
  this.navCtrl.push(BurnsPage);
}
clickme5(){
  this.navCtrl.push(FeverPage);
}
clickme6(){
  this.navCtrl.push(HeatPage);
}
}
