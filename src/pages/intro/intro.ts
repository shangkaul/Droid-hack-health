import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Slides } from 'ionic-angular';
import { GoogleLoginPage } from '../google-login/google-login';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
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
go()
{
  this.slide.slideTo(1, 500);
}
continue()
{
  this.navCtrl.push(GoogleLoginPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

}
