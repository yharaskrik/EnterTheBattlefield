import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../providers/auth/auth';
import { DatabaseserviceProvider } from '../providers/databaseservice/databaseservice';
import {Http} from "@angular/http";

export const firebaseConfig = {
  apiKey: "AIzaSyCaFmd9sk0sh0T588zdsTsT9apH9N6LKig",
  authDomain: "enterthebattlefield-8b84d.firebaseapp.com",
  databaseURL: "https://enterthebattlefield-8b84d.firebaseio.com",
  projectId: "enterthebattlefield-8b84d",
  storageBucket: "enterthebattlefield-8b84d.appspot.com",
  messagingSenderId: "845598895960"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DatabaseserviceProvider
  ]
})
export class AppModule {}
