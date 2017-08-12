import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SignUpPage} from '../pages/sign-up/sign-up';
import { HomePage } from '../pages/home/home';
import { TabsPage} from '../pages/tabs/tabs';
import { GoogleLoginPage } from '../pages/google-login/google-login';
import { NativeStorage } from '@ionic-native/native-storage';
import { Storage } from '@ionic/storage';
import {ContactProvider} from '../providers/contact/contact';
import { IntroPage } from '../pages/intro/intro';
//import { UserProvider } from '../providers/user/user';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
uid:any;
  rootPage:any ;

  constructor(platform: Platform,
   statusBar: StatusBar,
    splashScreen: SplashScreen,
    public storage:Storage,
    public nativeStorage: NativeStorage, public ct:ContactProvider) { 
    platform.ready().then(() => {
      storage.get('xyz').then((val) => {
    this.ct.n1=val;
   
  });
//  alert(this.ct.n1);

this.nativeStorage.getItem('myitem')
  .then(
    data => this.rootPage=GoogleLoginPage,
    error => this.rootPage=IntroPage//GoogleLoginPage
  );
//       this.nativeStorage.setItem('sanjivan', {property: 'uid'})
//   .then(
//     () => alert('sent'),
//     error => alert('no')
//   );

// this.nativeStorage.getItem('sanjivan')
//   .then(
//     data => this.rootPage(TabsPage),
//     error => this.rootPage(GoogleLoginPage)
//   );
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

