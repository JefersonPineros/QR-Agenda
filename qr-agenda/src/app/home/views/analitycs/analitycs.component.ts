import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
} from '@ionic/angular/standalone';
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
  ],
})
export class AnalitycsComponent implements OnInit {
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

  goBack() {
    this.router.navigate(['/home', this.typeUser]);
  }
}
