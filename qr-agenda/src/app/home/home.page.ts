import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
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
import { addIcons } from 'ionicons';
import { ActivatedRoute } from '@angular/router';
import { logoIonic, arrowForward, peopleOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { EventModel } from '../model/eventModel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonList,
    IonButton,
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
    RouterModule,
  ],
})
export class HomePage {
  public listEvents: Array<EventModel>;
  public typeUser: string = '';

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe({
      next: (param) => {
        const type = param.get('type');
        if (type) {
          this.typeUser = type;
        }
      },
    });

    addIcons({
      logoIonic,
      arrowForward,
      peopleOutline,
    });

    this.listEvents = [
      {
        nombre_evento: 'Diseñando cualquier cosa en empresas',
        fecha_evento: new Date('2025-06-20T14:30:00'),
        ponente: 'Ricardo Gaviria',
        tema: 'Diseño',
        asistentes: [
          {
            nombre: 'María',
            apellidos: 'López',
            tel: '322-574-8391',
            confirmacion: true,
            images: './assets/images/persona2.jpg',
          },
          {
            nombre: 'Juan',
            apellidos: 'Ramírez',
            tel: '311-298-4127',
            confirmacion: true,
            images: './assets/images/persona1.jpeg',
          },
          {
            nombre: 'Ana',
            apellidos: 'Torres',
            tel: '318-602-7549',
            confirmacion: true,
            images: './assets/images/persona3.jpg',
          },
        ],
      },
      {
        nombre_evento: 'Desarrollo de aplicaciones',
        fecha_evento: new Date('2025-07-10T14:30:00'),
        ponente: 'Juan Manuel Moreno',
        tema: 'Aplicaciones',
        asistentes: [
          {
            nombre: 'Sofía',
            apellidos: 'Martínez',
            tel: '312-490-2768',
            confirmacion: true,
            images: './assets/images/persona10.jpg',
          },
          {
            nombre: 'Diego',
            apellidos: 'Herrera',
            tel: '310-782-3190',
            confirmacion: true,
            images: './assets/images/persona4.jpeg',
          },
          {
            nombre: 'Andrés',
            apellidos: 'Vargas',
            tel: '315-903-6745',
            confirmacion: true,
            images: './assets/images/persona6.jpg',
          },
          {
            nombre: 'Ana',
            apellidos: 'Torres',
            tel: '318-602-7549',
            confirmacion: true,
            images: './assets/images/persona9.jpg',
          },
        ],
      },
    ];
  }

  goCreate() {
    this.router.navigate(['/create', this.typeUser]);
  }

  goCheckIn() {
    this.router.navigate(['/checkIn', this.typeUser]);
  }

  eventsClic() {
    console.log('Hola mundo');
  }
}
