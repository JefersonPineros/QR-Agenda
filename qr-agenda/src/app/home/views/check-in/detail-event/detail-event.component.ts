import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
} from '@ionic/angular/standalone';

import { Router, ActivatedRoute } from '@angular/router';
import { QRCodeComponent } from 'angularx-qrcode';

interface Evento {
  title: string;
  date: string;
  time: string;
  type: 'check-in' | 'pasado';
}

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    QRCodeComponent,
  ],
})
export class DetailEventComponent implements OnInit {
  event: Evento | null = null;
  loading = true;
  public typeUser: string = '';
  public qrData: string = ''; // Propiedad para almacenar los datos del QR
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.route.paramMap.subscribe({
        next: (param) => {
          const type = param.get('type');
          if (type) {
            this.typeUser = type;
          }
        },
      });

      if (params['title']) {
        this.event = {
          title: params['title'],
          date: params['date'],
          time: params['time'],
          type: params['type'] as 'check-in' | 'pasado',
        };
        this.loading = false;
        this.qrData = JSON.stringify(this.event); // Convertir el objeto evento a JSON para el QR
      } else {
        this.router.navigate(['/checkIn', this.typeUser]);
      }
    });
  }

  goBack() {
    this.router.navigate(['/checkIn', this.typeUser]);
  }

  isUpcoming(): boolean {
    return this.event?.type === 'check-in';
  }
}
