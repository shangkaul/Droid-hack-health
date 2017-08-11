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
    IonicModule.forRoot(MyApp)
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

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
