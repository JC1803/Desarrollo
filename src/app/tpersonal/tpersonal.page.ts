import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddtareaPage } from '../addtarea/addtarea.page';
import { PostProvider } from 'src/providers/post-providers';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-tpersonal',
  templateUrl: './tpersonal.page.html',
  styleUrls: ['./tpersonal.page.scss'],
})
export class TpersonalPage implements OnInit {
  tareasp: any[] = [];
  tareasdetalle: any[] = [];
  datos: any[] = [];
  id2: string="";
  estado: string="";
  tipousuario: String= "";
  textoBuscar = '';
  fecha: any;
  fechafin = moment();
  

  constructor(private menu: MenuController,
    public alertController: AlertController,
    public modalController: ModalController,
    private router: Router,
    private postPvdr: PostProvider,
    private localNotifications: LocalNotifications
    ) {   }

  ngOnInit() {
    this.menu.close();
  console.log(this.fechafin);
    this.postPvdr.$getListSource.subscribe(list => {
      this.datos= list;
      this.id2=this.datos[0].Id_Usuario;
      //console.log(this.id2);
    }
    );
    this.obtenerTareasp();

    this.calcularfecha();
  }

    public obtenerTareasp(){


      this.postPvdr.getTareasP(this.id2).subscribe(
        (data) => {
         if(data!= null){
           console.log(data);
            this.postPvdr.Globaltpersonal= data;
            this.tareasp= this.postPvdr.Globaltpersonal;
          }
        },
        (error)=> {
        console.error(error);
        }

      )
    }
    doRefresh(evento){
      this.obtenerTareasp();
  
      setTimeout(() => {
        evento.target.complete();
      }, 2000);
    
    }
  async presentModal( id) {
    console.log(id);
    const modal = await this.modalController.create({
      component: AddtareaPage,
      cssClass: 'my-custom-modal-css',
      componentProps:{
      id
      
      }
    
    });
    return await modal.present();
  }

 


  async mostrartareap(id){
    
    this.postPvdr.buscarTareas(id).subscribe(
     (dato) => { // Success
       if(dato !=null){
         this.tareasdetalle = dato;
       console.log(dato);
       this.postPvdr.sendListTarea(this.tareasdetalle);
       this.router.navigate(['/vertareap']);
       }
       
 
     },
     (error) =>{
       console.error(error);
     }
   )
   }
   async tareastipo(estado){

    this.postPvdr.getTareaspesta(estado, 4, this.id2).subscribe(
      (data) => {
       if(data != null){
         console.log(data);
          this.postPvdr.Globaltpersonal= data;
          this.tareasp= this.postPvdr.Globaltpersonal;
        }
      },
      (error)=> {
      console.error(error);
      }

    )
   }

   segmentChanged(ev: any) {
    
    if(this.tipousuario=="1"){
      this.obtenerTareasp();

    } else if (this.tipousuario=="2"){
      this.estado="Pendiente"


      this.tareastipo(this.estado);

    }else if(this.tipousuario=="3"){
      this.estado="Terminada"
      this.tareastipo(this.estado);

    }else if(this.tipousuario=="4"){
      this.estado="Vencida"
      this.tareastipo(this.estado);
    }

   }

   //Realizar busqueda
   buscar(event){
    this.textoBuscar=event.detail.value;
  }

  //calcular para notificar

  calcularfecha(){
    setInterval(() => {
    this.postPvdr.getTareasP(this.id2).subscribe(
      (data) => {
       if(data!= null){
          
        data.forEach(element => {
          this.fecha = element.FechaFin;
          let ini = moment(this.fecha);
          let fin = moment(this.fechafin);
          let diff = ini.diff(fin, 'days');
          console.log(diff);
        console.log(this.fecha);
       if(diff <= 1){
        this.Notif(element.Descripcion)
       }
      }
        );
        }
      },
      (error)=> {
      console.error(error);
      }

    );
  
  }, 86400000);
}

  Notif(dato) {

    this.localNotifications.schedule({
      id: 2,
      title: 'La siguiente tarea esta por cumplirse:',
      text: dato,
      // trigger: {at: new Date(new Date().getTime() + 3600)},
      data: { secret: dato }
    });
    console.log("sexy");
  }
}