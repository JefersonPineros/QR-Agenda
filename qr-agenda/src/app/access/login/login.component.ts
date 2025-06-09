import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
  IonInput,
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonCol,
    IonGrid,
    IonRow,
    IonInput,
  ],
})
export class LoginComponent implements OnInit {
  constructor(private navCtrl: NavController, private router: Router) {}

  ngOnInit() {}

  goLogin() {
    console.log('Holamundo');

    this.navCtrl.navigateForward('/home');
  }
}
