import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { TabsPage} from '../tabs/tabs';
import { ContactProvider } from '../../providers/contact/contact';
/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
public contact:any="9619180009";
public contact1:any="9973866388";
public contact2:any="9484636373";
public contact3:any="9465353536";
public contact4:any="9937465355";
  constructor(public ct:ContactProvider,public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }
 add(){
    this.http.get("http://srmpedia.esy.es/contacts/record.php?contact="+this.contact+"&contact1="+this.contact1+"&contact2="+this.contact2+"&contact3="+this.contact3+"&contact4="+this.contact4)
.subscribe((res) =>{
  this.ct.n1=this.contact;
  this.ct.n2=this.contact1;
  this.ct.n3=this.contact2;
  this.ct.n4=this.contact3;
  this.ct.n5=this.contact4;

          alert('Response Submitted Successfully')
   });
   this.navCtrl.push(TabsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
