import { Component } from '@angular/core'; 
import { AboutPage } from '../about/about';
import { ContactsPage } from '../contacts/contacts';
import {NavController, NavParams } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {MedkitPage} from '../medkit/medkit';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MedkitPage;  
  tab2Root: any = AboutPage;
  tab3Root: any = ContactsPage;
  tab4Root: any = ProfilePage;

  constructor() {

  }
}