import { Component, OnInit } from '@angular/core';
 import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonCheckbox,
  IonText,
  IonAlert,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

interface EventData {
  capacity: number;
  alerts: string[];
  scanResult: string;
}

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonAlert,
  ],
  standalone: true,
})
export class ScanComponent implements OnInit {
  eventData: EventData = {
    capacity: 200,
    alerts: [
      'Esta persona ya ha entrado',
      'Entrada duplicada',
      'Capacidad alcanzada',
      'Codigo escaneado correctamente',
    ],
    scanResult: 'John',
  };

  isAlertOpen = false;
  alertButtons = ['OK'];

  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/home']);
  }

  onScanCode() {
    console.log('Escaneando código...');
  }

  finalizarEvento() {
    this.isAlertOpen = true;
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
