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
import { GridPage} from '../pages/grid/grid';
import { GooglePlus } from '@ionic-native/google-plus';
import  firebase from 'firebase';
import { UserProvider } from '../providers/user/user';
import { Http,HttpModule } from '@angular/http';
 import { Geolocation } from '@ionic-native/geolocation';
  import {SMS} from '@ionic-native/sms';
import { Facebook } from '@ionic-native/facebook';
import {ContactProvider} from  '../providers/contact/contact';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NativeStorage } from '@ionic-native/native-storage';
import { HospPage} from '../pages/hosp/hosp';
import { WoundsPage } from '../pages/wounds/wounds';
import {BurnsPage } from '../pages/burns/burns';
import {FeverPage } from '../pages/fever/fever';
import { FracturePage} from '../pages/fracture/fracture';
import { HeatPage} from '../pages/heat/heat';
import { SnakePage} from '../pages/snake/snake';
import { IonicStorageModule } from '@ionic/storage';




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
    MedkitPage,
    GridPage,
    HospPage,
    HeatPage,
    SnakePage,
    BurnsPage,
    FeverPage,
    FracturePage,
    WoundsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    IonicStorageModule.forRoot()

      
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
    MedkitPage,
    GridPage,
    HospPage,
    HeatPage,
    SnakePage,
    BurnsPage,
    FeverPage,
    FracturePage,
    WoundsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    Geolocation,
    SMS,
    NativeStorage,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ContactProvider
  
  ]
})
export class AppModule {}
