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
 // email:any;
  uid:any;

  constructor(public navCtrl: NavController, public ud:UserProvider,
              public navParams: NavParams,public http:Http) {
                  this.name= this.ud.name;
                this.imageURL= this.ud.imageUrl;
              //  this.contact=this.ud.contacts;
              this.ud.contacts=this.contact;
              console.log(this.ud.contacts);
              console.log(this.contact);
              
                this.ud.addresses=this.address;
                this.ud.aadhars=this.aadhar;
                //this.ud.email= this.emails; 
                this.uid = this.ud.uid;   
                          
        console.log('this.uid');
                

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  signupn(){
    this.http.get("http://localhost/sanjeevani/record.php?heading="+this.heading+"&details="+this.details+"&contact="+this.contact+"&address="+this.address+"&aadhar="+this.aadhar+"&email="+this.email)
.subscribe((res) =>{
       this.name= this.ud.name;
                this.imageURL= this.ud.imageUrl;
              //  this.contact=this.ud.contacts;
              this.ud.contacts=this.contact;
              console.log(this.ud.contacts);
              console.log(this.contact);
              
                this.ud.addresses=this.address;
                this.ud.aadhars=this.aadhar;
                //this.ud.email= this.emails; 
                this.uid = this.ud.uid;   
   });
   this.navCtrl.push(TabsPage);
  }
// signupn()
// {
//   this.navCtrl.push(TabsPage);
// }
}
