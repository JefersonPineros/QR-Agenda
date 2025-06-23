import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {
  arrowForward,
  chevronBack,
  logoIonic,
  peopleOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  imports: [CommonModule, IonHeader, IonTitle, IonToolbar, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    });
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/home', this.typeUser]);
  }
}
