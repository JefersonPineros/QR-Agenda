import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {
  IonButtons,
  IonBackButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { Toast } from '@capacitor/toast';
@Component({
  selector: 'app-export-data',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonButton,
  ],
})
export class ExportComponent {
  /** Reactive-form object that tracks the two check-boxes */
  // exportForm: FormGroup;
  public csv: boolean = false;
  public pdf: boolean = false;
  public typeUser: string = '';

  constructor(
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private router: Router,
    private route: ActivatedRoute // Just to show quick feedback
  ) {
    this.route.paramMap.subscribe({
      next: (param) => {
        const type = param.get('type');
        if (type) {
          this.typeUser = type;
        }
      },
    });
  }

  /** Triggered when the bottom “Exportar” button is pressed */
  async onExport(): Promise<void> {
    if (!this.csv && !this.pdf) {
      await Toast.show({
        text: 'Selecciona al menos un formato para exportar.',
      });

      const warn = await this.toastCtrl.create({
        message: 'Selecciona al menos un formato para exportar.',
        color: 'warning',
        duration: 2000,
      });
      await warn.present();
      return;
    }

    // ── TODO: wire these calls to whatever service generates the files ──
    if (this.csv) {
      console.log('Generating CSV …');
      /* this.exportService.generateCsv(); */
    }
    if (this.pdf) {
      console.log('Generating PDF …');
      /* this.exportService.generatePdf(); */
    }

    await Toast.show({
      text: 'Selecciona al menos un formato para exportar.',
    });

    const ok = await this.toastCtrl.create({
      message: 'El reporte se está generando. Revisa tus descargas.',
      color: 'success',
      duration: 2000,
    });
    await ok.present();
  }

  goBack() {
    this.router.navigate(['/home', this.typeUser]);
  }
}
