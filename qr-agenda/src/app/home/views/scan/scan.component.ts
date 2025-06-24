import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonAlert,
  IonFooter,
  IonModal,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Html5Qrcode } from 'html5-qrcode';

interface Evento {
  title: string;
  date: string;
  time: string;
  type: 'check-in' | 'pasado';
}

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss'],
  standalone: true,
  imports: [
    IonModal,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonAlert,
    IonFooter,
    IonModal,
  ],
  providers: [BarcodeScanner],
})
export class ScanComponent implements OnInit, AfterViewInit, OnDestroy {
  scanAlertOpen = false;
  scanAlertMessage = '';
  isWeb = false;
  scannedEvent: Evento | null = null;
  private html5QrCode: Html5Qrcode | null = null;

  constructor(private router: Router, private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {
    this.isWeb = !(window as any).cordova; // Detectar navegador
  }

  ngAfterViewInit(): void {
    if (this.isWeb) {
      this.startWebScanner();
    }
  }

  ngOnDestroy(): void {
    this.stopWebScanner();
  }

  startWebScanner() {
    if (!document.getElementById('reader')) return;
    this.html5QrCode = new Html5Qrcode('reader');
    this.html5QrCode
      .start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          this.stopWebScanner();
          this.handleScanResult(decodedText);
        },
        (error) => {
          // ignore errors
        }
      )
      .catch((err) => console.error('No se pudo iniciar html5-qrcode:', err));
  }

  stopWebScanner() {
    if (this.isWeb && this.html5QrCode) {
      this.html5QrCode.stop().catch((err) => console.log('El scanner ya estaba detenido.'));
      this.html5QrCode = null;
    }
  }

  async onScanCode() {
    try {
      const barcodeData = await this.barcodeScanner.scan();
      if (barcodeData.cancelled) return;

      this.handleScanResult(barcodeData.text);
    } catch (error) {
      console.error('Error al escanear:', error);
      this.scanAlertMessage = 'Error al escanear el código.';
      this.scanAlertOpen = true;
    }
  }

  handleScanResult(scannedData: string) {
    try {
      const parsedData: Evento = JSON.parse(scannedData);
      // Validación básica para asegurar que es un objeto de evento
      if (parsedData && parsedData.title && parsedData.date && parsedData.time) {
        this.scannedEvent = parsedData;
      } else {
        throw new Error('El código QR no contiene datos de evento válidos.');
      }
    } catch (error) {
      console.error('QR inválido o con formato incorrecto:', error);
      this.scanAlertMessage = 'El código QR no es válido.';
      this.scanAlertOpen = true;
      if (this.isWeb) {
        this.resetScanner();
      }
    }
  }

  resetScanner() {
    this.scannedEvent = null;
    // Espera a que el DOM se actualice antes de reiniciar la cámara
    setTimeout(() => {
      if (this.isWeb) this.startWebScanner();
    }, 100);
  }

  goBack() {
    this.stopWebScanner();
    this.router.navigate(['/home']);
  }
}
