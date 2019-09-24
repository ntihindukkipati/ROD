import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data = { title:'', description:'', date:'', time:'' };

  constructor(public navCtrl: NavController,
    public localNotifications: LocalNotifications,
    public platform: Platform,
    public alertCtrl: AlertController) {}

  submit() {

      console.log(this.data);
      var date = new Date(this.data.date + " " + this.data.time);
      console.log(date);
      this.localNotifications.requestPermission().then(async (permission) => {
        this.localNotifications.schedule({
          id: 1,
          title: 'Hello ASE class',
          text: 'You have a Lab Deadline on Saturday',
          trigger:{at: date},
          led: 'FF0000',
          sound: 'file://assets/sounds/Rooster.mp3'

        });
        let alert = this.alertCtrl.create({
          title: 'Congratulation!',
          subTitle: 'Notification setup successfully at ' + date,
          buttons: ['OK']
        });
        await alert.present();
        this.data = {title: '', description: '', date: '', time: ''};
      });
    }

}
