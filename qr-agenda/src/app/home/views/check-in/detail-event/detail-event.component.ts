import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
} from '@ionic/angular/standalone';

import { Router, ActivatedRoute } from '@angular/router';

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
  ],
})
export class DetailEventComponent implements OnInit {
  event: Evento | null = null;
  loading = true;
  imageError = false;
  public typeUser: string = '';
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

  onImageError(event: any) {
    console.error('Error al cargar la imagen QR:', event);
    this.imageError = true;
    event.target.parentElement.classList.add('image-error');
  }

  onImageLoad(event: any) {
    this.imageError = false;
    event.target.parentElement.classList.remove('image-error');
  }

  doCheckIn() {
    console.log('Haciendo check-in para:', this.event?.title);
  }
}
