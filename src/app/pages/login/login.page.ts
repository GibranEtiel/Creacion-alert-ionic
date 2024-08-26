import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  comuna:string = "Lo espejo";
  edad: number = 25;
  nombre: string = "Julian";
  arregloPersona: any = [
    {
      nombre: 'José',
      apellido: 'Muñoz',
      edad: 24
    }
  ];

  datosP: any = {
    id: 1,
    dato: 'Programación'
  }

  constructor(private router:Router, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }
  irPagina(){
    //crear el codigo dque quiera de la logica
    this.router.navigate(['/agregar']);
    this.presentAlert("este es el titulo",'mensaje')//manera para hacer varias alert con variables
    //this.presentToast('bottom')

  }
  async presentAlert(titulo:string,msj:string) {// hacer varias alert 
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['ok'],
    });

    await alert.present();
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }
}


