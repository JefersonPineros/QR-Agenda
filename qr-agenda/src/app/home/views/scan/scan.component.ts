import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  IonButton,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
  imports: [
    IonButton,
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
