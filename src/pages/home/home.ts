import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth";
import {DatabaseserviceProvider} from "../../providers/databaseservice/databaseservice";
import {AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  battles: JSON[];

  constructor(public navCtrl: NavController,
              private fire: AngularFireAuth,
              public db: DatabaseserviceProvider) {

    this.battles = db.listBattles();
    console.log(this.battles);

  }

  goToProfile():void {
    this.navCtrl.push('ProfilePage');
  }

  signOut():void {
    this.fire.auth.signOut();
  }

}
