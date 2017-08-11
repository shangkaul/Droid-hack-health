import { Component } from '@angular/core';
import {NavController, NavParams,Platform } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';  
import { AngularFire, AuthProviders, AuthMethods, AngularFireAuth,FirebaseAuthState } from 'angularfire2';
import { GooglePlus} from '@ionic-native/google-plus';
import  firebase from 'firebase';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private platform:Platform,
  public af: AngularFire,
  private gp: GooglePlus) {
  }
login()
{
 
      this.af.auth.subscribe((data: FirebaseAuthState) => {
 
        this.af.auth.unsubscribe()
        console.log("in auth subscribe", data)
 
        this.platform.ready().then(() => {
           this.gp.login({
                'webClientId' : '767074418891-03oqo1leubkicjla22picesqldk0g8rb.apps.googleusercontent.com'
           })
           .then((userData) => {
                var provider = firebase.auth.GoogleAuthProvider.credential(userData.idToken);
 
                 firebase.auth().signInWithCredential(provider)
                  .then((success) => {
                    this.navCtrl.setRoot(SignUpPage); 
                  })
                  .catch((error) => {
                      
                  });
 
                 })
             .catch((gplusErr) => {
                    
                  });
 
            })
       })
 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GoogleLoginPage');
  }

}
