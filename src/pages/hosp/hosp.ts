import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http} from '@angular/http'; 
/**
 * Generated class for the HospPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-hosp',
  templateUrl: 'hosp.html',
})

export class HospPage {
id:any;
public ents:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
    this.id=this.navParams.get('id');
       this.http.get("http://srmpedia.esy.es/health/disp.php?no="+this.id)// link to the php file
                .subscribe((res)=>{
                  console.log(res);
                  this.ents=res.json();
                  console.log(this.ents);
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospPage');
  }

}
