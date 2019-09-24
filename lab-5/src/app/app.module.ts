import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation } from "@ionic-native/geolocation";

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {GeolocationPage} from "../pages/geolocation/geolocation";

const firebaseConfig = {
  apiKey: "AIzaSyDjcT0fI7-4iS01E01oLhMD-nJLPHA9pLk",
  authDomain: "ase5-30272.firebaseapp.com",
  databaseURL: "https://ase5-30272.firebaseio.com",
  projectId: "ase5-30272",
  storageBucket: "ase5-30272.appspot.com",
  messagingSenderId: "641578364652",
  appId: "1:641578364652:web:fc45df8a5dd56d6dac7fc9"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeolocationPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeolocationPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications,
    Geolocation,
    AngularFireAuth
  ]
})
export class AppModule {}
