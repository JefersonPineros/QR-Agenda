import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonList,
  IonIcon,
  IonNote,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonList,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
    IonNote,
  ],
})
export class HomePage {
  constructor(private router: Router) {}
}
