import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  contact:any;
 public addressd:any;
 public aadhard:any;
 public email:any;
  named:any;
  imageURL:any;
  contactd:any
  emails:any;
  uidd:any;

  constructor(public navCtrl: NavController, private ud:UserProvider,
              public navParams: NavParams) {

                 this.named= this.ud.name;
                this.imageURL= this.ud.imageUrl;
               this.contactd=this.ud.contacts;
               console.log(this.contactd);
                console.log(this.ud.contacts);
                this.addressd=this.ud.addresses;
                console.log('this.addressd');
                this.aadhard=this.ud.aadhars;
                this.emails= this.ud.email; 
                this.uidd = this.ud.detailss; 
                

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
