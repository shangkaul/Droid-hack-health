import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
  import { Geolocation } from '@ionic-native/geolocation';
import { ContactProvider } from '../../providers/contact/contact';
import { SMS } from '@ionic-native/sms';
import {Http} from '@angular/http';
import {UserProvider}  from '../../providers/user/user';
import { GridPage}  from '../grid/grid';
import {ContactsPage} from '../contacts/contacts';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MedkitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-medkit',
  templateUrl: 'medkit.html',
})
export class MedkitPage {
public lat:any;
public long:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation,private sms: SMS,
  public con:ContactProvider,public http:Http,public user:UserProvider,public alertCtrl: AlertController) {
  
this.geolocation.getCurrentPosition().then((resp) => {
  console.log(resp.coords.latitude+","+resp.coords.longitude);
}).catch((error) => {
  console.log('Error getting location', error);
});

let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {

 this.lat=data.coords.latitude;
 this.long=data.coords.longitude;
});
}


grid()
{
  this.navCtrl.push(GridPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MedkitPage');
  }
help()
{
  
  if(this.con.n1==1)
  {
    this.http.get("http://srmpedia.esy.es/health/save.php?lat="+this.lat+"&long="+this.long+"&nam="+this.user.name+"&mob="+this.user.uid)
 .subscribe((res)=>{
//  alert("done");
//  alert(this.lat+","+this.long)

  });
 this.sms.send(this.con.n1, 'Your Friend needs your help, navigate to his location ASAP.  https://www.google.co.in/maps/dir//'+this.lat+','+this.long);
 console.log(this.con.n1);
 this.sms.send(this.con.n2, 'Your Friend needs your help, navigate to his location ASAP.  https://www.google.co.in/maps/dir//'+this.lat+','+this.long);
  console.log(this.con.n2);
 this.sms.send(this.con.n3, 'Your Friend needs your help, navigate to his location ASAP.  https://www.google.co.in/maps/dir//'+this.lat+','+this.long);
  console.log(this.con.n3);
 this.sms.send(this.con.n4, 'Your Friend needs your help, navigate to his location ASAP.  https://www.google.co.in/maps/dir//'+this.lat+','+this.long);
 console.log(this.con.n4);
this.sms.send(this.con.n5, 'Your Friend needs your help, navigate to his location ASAP.  https://www.google.co.in/maps/dir//'+this.lat+','+this.long);
 console.log(this.con.n5);
alert("SENT");

}
  
  else
  {
    alert("Add contacts first");
    this.navCtrl.push(ContactsPage);

}


}
i(){
  let alert = this.alertCtrl.create({
    title: 'First Aid',
    subTitle: "Essential First Aid information that can save lives.",
    buttons: ['Dismiss']
  });
  alert.present();
}

io(){
  let alert = this.alertCtrl.create({
    title: 'S.O.S',
    subTitle: 'Send your location to the nearest hospital and you trusted contacts.',
    buttons: ['Dismiss']
  });
  alert.present();
}
}

