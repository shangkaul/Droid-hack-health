import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
   @ViewChild(Slides) slide: Slides;
  
   slides = [
    {
      title: "Learn about the different techniques which can save your life when in need",
      image: "assets/img/logo.png",
      ima: "assets/img/next.png",
    },
     {
        image: "assets/img/capture.jpg",
      title: "What is Sanjeevni?",
      description: "<b>SANJEEVNI</b> is an app built to save lives, with the resolve that no more lives will be lost due to delay in getting the victim to the hospital or failing to give them first-aid in those crucial moments.",
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
continue(){
  this.navCtrl.push(TabsPage);
}
}
