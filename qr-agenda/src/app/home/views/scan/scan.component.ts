import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
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
export class ScanComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
