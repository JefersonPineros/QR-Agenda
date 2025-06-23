import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  IonButton
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
  ],
})
export class ExportComponent {
  /** Reactive-form object that tracks the two check-boxes */
  exportForm: FormGroup;

  /** Path to the asset to download */
  private readonly reportPath = 'assets/reports/evento-resumen.xlsx';
  /** Suggested file-name for the user’s download */
  private readonly downloadName = 'evento-resumen.xlsx';

  constructor(
    private fb: FormBuilder,
    private toastCtrl: ToastController // Just to show quick feedback
  ) {
    this.exportForm = this.fb.group({
      csv: [false],
      pdf: [false],
    });
  }

  /** Download the XLSX sitting in assets/ and show a toast  */
  async onExport(): Promise<void> {
    // build a hidden <a> tag and trigger a click → download starts
    const a = document.createElement('a');
    a.href = this.reportPath;        // served by Angular dev server / built site
    a.download = this.downloadName;  // forces “Save as…” with that name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // quick feedback
    const ok = await this.toastCtrl.create({
      message: 'Descarga iniciada ✔',
      duration: 2000,
      color: 'success',
    });
    await ok.present();
  }

  /** Triggered when the bottom “Exportar” button is pressed */
}
