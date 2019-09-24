import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable} from "rxjs";

/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  public geoLocationsList : Observable<any[]>;
  public geoLocations : any;

  constructor(public AngFireBaseDB: AngularFireDatabase, public FireAuth: AngularFireAuth) {
    this.geoLocationsList = AngFireBaseDB.list(this.FireAuth.auth.currentUser.uid).valueChanges();
    console.log("user "+this.FireAuth.auth.currentUser.uid + this.geoLocationsList);
    this.geoLocationsList.subscribe((geoList: any) =>{
      this.geoLocations=geoList;
      console.log("hai");
      console.log("geoLocations"+this.geoLocations);
    });
  }

  submit() {

    const currentUser = this.AngFireBaseDB.list(this.FireAuth.auth.currentUser.uid);
    console.log(currentUser);
    navigator.geolocation.getCurrentPosition(geoLocationSuccess, geoLocationError, {enableHighAccuracy: true});

    function geoLocationSuccess(position){
      let d = new Date();
      currentUser.push({'GeoLatitude' : position.coords.latitude,
        'GeoLongitude' : position.coords.longitude,
        'GeoAltitude' : position.coords.altitude,
        'GeoTimestamp' : d.getTime()});
    }
    function geoLocationError(error) {
      alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    }


  }
}
