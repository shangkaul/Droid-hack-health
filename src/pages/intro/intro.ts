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
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
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
