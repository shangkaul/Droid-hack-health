import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserProvider } from '../../providers/user/user';
import { Http} from '@angular/http';

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
 public heading:any;
 public details:any;
 public contact:any;
 public address:any;
 public aadhar:any;
 public email:any;
  name:any;
  imageURL:any;
  total_score:number;
  //email:number;
  uid:any;

  constructor(public navCtrl: NavController, private ud:UserProvider,
              public navParams: NavParams,public http:Http) {
                this.name= this.ud.name;
                this.imageURL= this.ud.imageUrl;
                //this.email= this.ud.email; 
                this.uid = this.ud.uid;               
        console.log('this.uid');
                

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  signupn(){
    this.http.get("http://localhost/sanjeevani/record.php?heading="+this.heading+"&details="+this.details+"&contact="+this.contact+"&address="+this.address+"&aadhar="+this.aadhar+"&email="+this.email)
.subscribe((res) =>{
     alert('sent');
   });
  }
// signupn()
// {
//   this.navCtrl.push(TabsPage);
// }
}
