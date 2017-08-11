import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {GoogleLoginPage} from '../pages/google-login/google-login';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { SignUpPage} from '../pages/sign-up/sign-up';
import { TabsPage} from '../pages/tabs/tabs';
import { AboutPage} from '../pages/about/about';
import { ContactsPage} from '../pages/contacts/contacts';
import {ProfilePage } from '../pages/profile/profile';
import { MedkitPage} from '../pages/medkit/medkit';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { GooglePlus } from '@ionic-native/google-plus';

import firebase from 'firebase';

export const firebaseConfig={
   
   apiKey: "AIzaSyDd2RJMbkcwbwkulluV2i9gPhS0_9d6ddQ",
    authDomain: "fir-hacks.firebaseapp.com",
    databaseURL: "https://fir-hacks.firebaseio.com",
    projectId: "firebase-hacks",
    storageBucket: "firebase-hacks.appspot.com",
    messagingSenderId: "767074418891"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoogleLoginPage,
    IntroPage,
    SignUpPage,
    TabsPage,
    ProfilePage,
    ContactsPage,
    AboutPage,
    MedkitPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GoogleLoginPage,
    IntroPage,
    SignUpPage,
    TabsPage,
    AboutPage,
    ContactsPage,
    AboutPage,
    ProfilePage,
    MedkitPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
