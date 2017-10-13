import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import firebase from 'firebase';
import {AngularFireAuth} from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    private fire: AngularFireAuth
  ) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  googleLogin(): void {
    this.authProvider.googleLogin();
  }

  facebookLogin(): void {
    this.authProvider.facebookLogin().then( data => {
      this.navCtrl.setRoot(HomePage).then( data => {
        console.log(this.fire.auth.currentUser);
        this.navCtrl.popToRoot();
      });
    });
  }

  signInAnonymously(): void {
    this.authProvider.signInAnonymously().then( data => {
      this.navCtrl.setRoot(HomePage).then( data => {
        console.log(this.fire.auth.currentUser);
        this.navCtrl.popToRoot();
      });
    });
  }
}
