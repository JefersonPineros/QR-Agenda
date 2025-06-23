import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
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
  IonLabel,
} from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/userModel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
    IonLabel,
  ],
})
export class LoginComponent implements OnInit {
  public listUsers: Array<UserModel>;
  public user: UserModel;

  constructor(
    private alertctrl: AlertController,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.user = new UserModel();
    this.listUsers = [
      {
        userName: 'admin',
        password: '123456',
        type: 'admin',
      },
      {
        userName: 'JefersonPiñeros',
        password: 'jeferson12345',
        type: 'user',
      },
      {
        userName: 'nikolDev',
        password: 'nikol12345',
        type: 'user',
      },
      {
        userName: 'javierDev',
        password: 'javier12345',
        type: 'user',
      },
    ];
  }

  ngOnInit() {}

  async goLogin() {
    let userAcces = this.listUsers.filter((item) => {
      return item.userName == this.user.userName;
    });

    if (userAcces.length > 0) {
      if (userAcces[0].password == this.user.password) {
        let type: string = userAcces[0].type!;
        this.navCtrl.navigateForward(['/home', type]);
      } else {
        console.log(this.user.password);
        const alert = this.alertctrl.create({
          header: 'Contraseña incorrecta',
          message: 'Por favor intente de nuevo contraseña incorrecta',
          buttons: ['OK'],
        });
        (await alert).present();
      }
    } else {
      const alert = this.alertctrl.create({
        header: 'Usuario incorrecto',
        message: 'El usuario no existe o es incorrecto',
        buttons: ['OK'],
      });
      (await alert).present();
    }
  }
}
