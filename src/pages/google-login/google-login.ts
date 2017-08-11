import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';  

/**
 * Generated class for the GoogleLoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-google-login',
  templateUrl: 'google-login.html',
})
export class GoogleLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
login()
{
  this.navCtrl.push(SignUpPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleLoginPage');
  }

}