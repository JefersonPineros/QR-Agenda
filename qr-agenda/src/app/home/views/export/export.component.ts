import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

@Component({
  selector: 'app-export-data',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss'],
  imports: [
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
  ],
})
export class ExportComponent {
  /** Reactive-form object that tracks the two check-boxes */
  exportForm: FormGroup;
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
    this.exportForm = this.fb.group({
      csv: [false],
      pdf: [false],
    });
  }

  /** Triggered when the bottom “Exportar” button is pressed */
  async onExport(): Promise<void> {
    const { csv, pdf } = this.exportForm.value;

    if (!csv && !pdf) {
      const warn = await this.toastCtrl.create({
        message: 'Selecciona al menos un formato para exportar.',
        color: 'warning',
        duration: 2000,
      });
      await warn.present();
      return;
    }

    // ── TODO: wire these calls to whatever service generates the files ──
    if (csv) {
      console.log('Generating CSV …');
      /* this.exportService.generateCsv(); */
    }
    if (pdf) {
      console.log('Generating PDF …');
      /* this.exportService.generatePdf(); */
    }

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
