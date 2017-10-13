import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private fire: AngularFireAuth) {

  }

  goToProfile():void {
    this.navCtrl.push('ProfilePage');
  }

  signOut():void {
    this.fire.auth.signOut();
  }

}
