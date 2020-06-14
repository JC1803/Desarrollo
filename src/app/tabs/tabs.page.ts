import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, NavController, IonicModule } from '@ionic/angular';
import { AppComponent } from '../app.component'
import { PostProvider } from 'src/providers/post-providers';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Storage } from '@ionic/Storage';
import { Platform } from '@ionic/angular';


//import { SettingPage } from '../setting/setting.page'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  textoBuscar = '';
  datos: any[] = [];
  noti: any[] = [];
  datonoti: any[] = [];
  id2: string = "";
  numNoti;
  mostrarnun = 0;
  lastid;
  clickSub: any;
  lastid1 = 0;
  numgenerar = 0;
  subscribe: any;


  constructor(public menu: MenuController,
    public ap: AppComponent,
    private localNotifications: LocalNotifications,
    public alertController: AlertController,
    public postPvdr: PostProvider,
    private storage: Storage,
    public navCtrl: NavController,
    public platform: Platform

  ) {
    // this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
    //  if (this.constructor.name == "TabsPage") {
    //   if (window.confirm("Quieres cerrar la app")) {
    //      navigator["app"].exitApp();
    //    }
    //     }
    //  }
    //  )
  }

  ngOnInit() {

    this.menu.enable(true, 'first');
    this.menu.close();


    this.postPvdr.$getListSource.subscribe(list => {
      if (list != null || list.length != 0) {
        this.datos = list;
        this.id2 = this.datos[0].Id_Usuario;
      }
      else {

      }
      //console.log(this.id2);
    }
    );

    this.contarNotif();
    this.mostrarnun = this.numNoti;

    console.log(this.mostrarnun);
    this.Notificaciones();
  }



  ionViewDidEnter() {
  this.subscribe = this.platform.backButton.subscribe(() => {
  
          navigator["app"].exitApp();
      
  
    });
 }

  ionViewWillLeave() {
   this.subscribe.unsubscribe();
  }

  //Revisiones constante
  Notificaciones() {
    this.postPvdr.intervalo = setInterval(() => {
      this.contarNotif();
      this.Verificar();
    }, 10000);
  }


  //Local Notificaciones
  simpleNotif(dato) {
    let texto = dato.descripcion;
    console.log(dato.descripcion);

    this.localNotifications.schedule({
      id: 1,
      title: 'Tiene una nueva notificacion',
      text: texto,
      // text: 'Usted ha sido asignado a una nueva actividad: tarea/reunion',
      data: { secret: texto }
    });
    console.log("sexy");
  }


  llamarmenu() {
    this.menu.open('first');
    this.ap.detalles();
  }


  //busqueda
  buscar(event) {
    this.textoBuscar = event.detail.value;
  }





  //Trae las notificaciones
  cargarNoti() {
    this.postPvdr.getNotificaciones().subscribe(
      (data) => {
        if (data != null) {
          this.noti = data.filter(
            user => user.Id_Usuario == this.id2);
          this.postPvdr.sendListNoti(this.noti);

        }

      },
      (error) => {
        console.error(error);
      }
    )
  }
  //revisa el numero de notificaciones
  Verificar() {

    if (this.mostrarnun == this.numgenerar) {
      this.cargarNoti();

    } else if (this.mostrarnun < this.numgenerar) {
      this.cargarNoti();
      this.numgenerar = this.mostrarnun;

    } else if (this.mostrarnun > this.numgenerar) {
      this.cargarNoti();
      this.simpleNotif(this.noti[0]);
      this.numgenerar = this.mostrarnun;
    }


  }

  //cuenta cuantas notificaciones tiene el usuario
  contarNotif() {
    this.postPvdr.contarNotificaciones(this.id2).subscribe(
      (data) => {
        if (data != null) {
          this.numNoti = data;
          console.log(this.numNoti);
          this.mostrarnun = this.numNoti;
        }
      },
      (error) => {
        console.error(error);
      }
    )

  }






}


