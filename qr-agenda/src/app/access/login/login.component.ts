import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
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
import { Dialog } from '@capacitor/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
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
      if (userAcces[0].password === this.user.password) {
        const type: string = userAcces[0].type!;
        this.navCtrl.navigateForward(['/home', type]);
      } else {
        await this.showAlert(
          'Contraseña incorrecta',
          'Por favor intente de nuevo, contraseña incorrecta'
        );

        // await this.showAlertAndroid(
        //   'Contraseña incorrecta',
        //   'Por favor intente de nuevo, contraseña incorrecta'
        // );
      }
    } else {
      await this.showAlert(
        'Usuario incorrecto',
        'El usuario no existe o es incorrecto'
      );

      // await this.showAlertAndroid(
      //   'Usuario incorrecto',
      //   'El usuario no existe o es incorrecto'
      // );
    }
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertctrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  private async showAlertAndroid(header: string, message: string) {
    await Dialog.alert({
      title: header,
      message: message,
    });
  }
}
