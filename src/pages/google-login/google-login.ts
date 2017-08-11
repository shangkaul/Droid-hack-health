import { Component } from '@angular/core';
import {NavController, NavParams,Platform } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';  
import { GooglePlus} from '@ionic-native/google-plus';
import  firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import { UserProvider } from '../../providers/user/user';
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
displayName;
   constructor(public navCtrl: NavController, private ud:UserProvider,
    private afAuth: AngularFireAuth, private fb: Facebook, private platform: Platform) {
    afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.ud.name = user.displayName;
      this.ud.uid = user.uid;
      this.ud.imageUrl = user.photoURL;
      this.ud.email = user.email;

    });
  }

  login() {
    if (this.platform.is('cordova')) {
      // return this.fb.login(['email', 'public_profile']).then(res => {
      //   const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      //   return firebase.auth().signInWithCredential(facebookCredential);
        
      // })
       this.fb.login(['email', 'public_profile']).then(res => {
         const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
         console.log("THIS IS THE FB CREDENTIALS",firebase.auth().signInWithCredential(facebookCredential));
       }).then(()=>{
         this.navCtrl.setRoot(SignUpPage);
       });
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => {console.log(res);this.navCtrl.setRoot(SignUpPage)});
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}