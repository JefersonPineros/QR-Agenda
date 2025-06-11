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

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

interface Evento {
  title: string;
  date: string;
  time: string;
  type: 'check-in' | 'pasado';
}

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss'],
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
export class CheckInComponent implements OnInit {
  selectedTab: 'todos' | 'proximos' = 'todos';

  events: Evento[] = [
    {
      title: 'Gestión de Productos',
      date: '14 de enero de 2023',
      time: '13:00 PST',
      type: 'check-in',
    },
    {
      title: 'Pensamiento de Diseño en los Negocios',
      date: '15 de enero de 2023',
      time: '17:00 PST',
      type: 'check-in',
    },
    {
      title: 'Cómo iniciar un boletín en 2023',
      date: '12 de enero de 2023',
      time: '09:00 PST',
      type: 'pasado',
    },
    {
      title: 'Planifica tu retiro con ChatGPT',
      date: '12 de enero de 2023',
      time: '14:00 PST',
      type: 'pasado',
    },
  ];
  public typeUser: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe({
      next: (param) => {
        const type = param.get('type');
        if (type) {
          this.typeUser = type;
        }
      },
    });
  }

  ngOnInit() {}

  selectTab(tab: 'todos' | 'proximos') {
    this.selectedTab = tab;
  }

  getUpcomingEvents(): Evento[] {
    return this.events.filter((event) => event.type === 'check-in');
  }

  getPastEvents(): Evento[] {
    return this.events.filter((event) => event.type === 'pasado');
  }

  onEventClick(event: Evento) {
    this.router.navigate(['/event-details', this.typeUser], {
      queryParams: {
        title: event.title,
        date: event.date,
        time: event.time,
        type: event.type,
      },
    });
  }

  goBack() {
    this.router.navigate(['/home', this.typeUser]);
  }
}
