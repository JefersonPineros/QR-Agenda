import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonRow,
  IonCol,
  IonTextarea,
} from '@ionic/angular/standalone';
import {
  arrowForward,
  chevronBack,
  logoIonic,
  mic,
  peopleOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,
    RouterModule,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonRow,
    IonCol,
    IonTextarea,
  ],
})
export class CreateComponent implements OnInit {
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
    addIcons({
      logoIonic,
      arrowForward,
      peopleOutline,
      chevronBack,
      mic,
    });
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/home', this.typeUser]);
  }
}
