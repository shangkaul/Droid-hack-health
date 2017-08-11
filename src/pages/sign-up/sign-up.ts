import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserProvider } from '../../providers/user/user';


/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  name:any;
  imageURL:any;
  total_score:number;
  email:number;

  constructor(public navCtrl: NavController, private ud:UserProvider,
              public navParams: NavParams) {
                this.name= this.ud.name;
                this.imageURL= this.ud.imageUrl;
                this.email= this.ud.email;                
        
                

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
signupn()
{
  this.navCtrl.push(TabsPage);
}
}
