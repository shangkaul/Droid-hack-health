import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
  import { Geolocation } from '@ionic-native/geolocation';
import { ContactProvider } from '../../providers/contact/contact';
import { SMS } from '@ionic-native/sms';
import {Http} from '@angular/http';
import {UserProvider}  from '../../providers/user/user';
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
  public con:ContactProvider,public http:Http,public user:UserProvider) {
  
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad MedkitPage');
  }
help()
{
  this.http.get("http://srmpedia.esy.es/health/save.php?lat="+this.lat+"&long="+this.long+"&nam="+this.user.name+"&mob="+this.user.uid)
 .subscribe((res)=>{
 

  });
 this.sms.send(this.con.n1, 'Mar rha hu  https://www.google.co.in/maps/dir//'+this.lat+','+this.long);
 this.sms.send(this.con.n2, 'Mar rha hu  https://www.google.co.in/maps/dir//'+this.lat+','+this.long);
 this.sms.send(this.con.n3, 'Mar rha hu  https://www.google.co.in/maps/dir//'+this.lat+','+this.long);
 this.sms.send(this.con.n4, 'Mar rha hu  https://www.google.co.in/maps/dir//'+this.lat+','+this.long);
this.sms.send(this.con.n5, 'Mar rha hu  https://www.google.co.in/maps/dir//'+this.lat+','+this.long);
alert("SENT");



}

}
