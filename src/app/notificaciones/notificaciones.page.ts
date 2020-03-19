import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { PostProvider } from 'src/providers/post-providers';
import { Router } from '@angular/router';
import { IonItem, AlertController } from '@ionic/angular';
//import { userInfo } from 'os';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  noti: any[] = [];
  datos: any[] = [];
  detreuniones: any[] = [];
  detareas: any[] = [];
  id1: string = "";
  botones;
  id;
  colores = 'primary';
  numNoti;
  mostrarnun;
  lastid;
  lastid1 = 0;
  datonoti: any[] = [];
  clickSub: any;

  constructor(private localNotifications: LocalNotifications,
    private postPvdr: PostProvider,
    private router: Router,
    public alertController: AlertController
  ) {

  }

  ngOnInit() {
    this.postPvdr.$getListSource.subscribe(list => {
      this.datos = list;
      this.id1 = this.datos[0].Id_Usuario;
    });

    this.cargarNoti();

  }


  //Funcion para generar las notificaciones evaluando la variacion en el tiempo



  //Carga las notificaciones 
  cargarNoti() {
    this.postPvdr.$getListNoti.subscribe(
      (data) => {
        if (data != null) {
          this.noti = data;
        //  this.lastid = this.noti[0].Id_notificaciones;
         // if (this.lastid > this.lastid1) {
            //this.lastid1 = this.lastid;
           // this.datonoti = this.noti[0];
           // this.simpleNotif(this.datonoti);
           // console.log(this.noti[0]);
           // console.log(this.datonoti);
        //  };
          // console.log (this.noti[0]);
        }

      },
      (error) => {
        console.error(error);
      }
    )
  }


  //Funcion para recargar la pagina
  doRefresh(evento) {
    //this.simpleNotif();
    this.cargarNoti();
    setTimeout(() => {
      evento.target.complete();
    }, 2000);

  }

  //funcion para visualizar la notificacion
  ver(tipo, idreutar, idnotificaciones) {

    console.log(idnotificaciones);

    //this.botones = "white";

    let body = {
      VistaMovil: 1,
    };

    this.postPvdr.updateNotificaciones(idnotificaciones, body).subscribe(
      (data) => {
        if (data != null) {
        }
      },
      (error) => {
        console.error(error);
      }
    )

    if (tipo == "Reunion") {
      // this.cargarNoti();
      //console.log(id);
      this.postPvdr.getReunion(idreutar).subscribe(
        (dato) => { // Success
          if (dato != null) {
            this.detreuniones = dato;
            console.log(this.detreuniones);
            this.postPvdr.sendListReunion(this.detreuniones);
            this.router.navigate(['/verreunion']);
          }
        },
        (error) => {
          console.error(error);
        }
      )
    } else if (tipo == "Tarea") {
      //  this.cargarNoti();
      this.postPvdr.buscarTareas(idreutar).subscribe(
        (dato) => { // Success
          if (dato != null) {
            this.detareas = dato;
            console.log(dato);
            this.postPvdr.sendListTarea(this.detareas);
            this.router.navigate(['/vertarea']);
          }
        },
        (error) => {
          console.error(error);
        }
      )
    }
  }
}

