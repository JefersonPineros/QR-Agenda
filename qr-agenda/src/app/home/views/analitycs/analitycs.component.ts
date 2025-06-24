import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular/standalone';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analitycs',
  templateUrl: './analitycs.component.html',
  styleUrls: ['./analitycs.component.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  ],
})
export class AnalitycsComponent implements OnInit, AfterViewInit {
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;
  charInstance!: Chart;
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

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    // const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = this.myChart.nativeElement.getContext('2d');
    this.charInstance = new Chart(ctx!, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            tension: 0.3,
            label: 'Asistencia promedio',
            data: [12, 19, 3, 5, 20],
            backgroundColor: [
              'rgba(12, 12, 12, 0.5)',
              'rgba(12, 12, 12, 0.5)',
              'rgba(12, 12, 12, 0.5)',
              'rgba(12, 12, 12, 0.5)',
            ],
            borderColor: [
              'rgb(0, 0, 0)',
              'rgb(0, 0, 0)',
              'rgb(0, 0, 0)',
              'rgb(0, 0, 0)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 2,
            },
            max: 30,
          },
        },
      },
    });
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/home', this.typeUser]);
  }
}
