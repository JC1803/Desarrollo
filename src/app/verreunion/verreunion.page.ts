import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController, AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import * as moment from 'moment';

@Component({
  selector: 'app-verreunion',
  templateUrl: './verreunion.page.html',
  styleUrls: ['./verreunion.page.scss'],
})
export class VerreunionPage implements OnInit {
  datos: any[]=[];
  id : String= "";
  usuario: String ="";
  comentario: string= "";
  comentario1: string= "";
  comentarios: any[] = [];
  fecha;
  fecha1;
  fecha2;
  valor;
  asistencia: string= "";
  motivo: string= "";
  public ocultarbotones: boolean;
  vAsisitencia: any;
  reuniondetalle: any[];
  
  constructor(
    private router:  Router,
    private postPvdr: PostProvider,
    private toastCtrl: ToastController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.botones();
  this.cargarReunion();
  
  this.postPvdr.$getListSource.subscribe( data => {
    this.usuario=data[0].Id_Usuario;
   // console.log(this.id);
    });
    this.fecha1= new Date().toISOString().substr(0,10);
    this.fecha2= new Date().toISOString().substr(11,8);
   // this.fecha= this.fecha1 +' '+ this.fecha2;
    this.fecha= moment().format('YYYY-MM-DD HH:mm:ss');
    this.buscarobservacion();
  }

  cargarReunion(){
    this.postPvdr.$getListReunion.subscribe(list => {
      console.log(list)
      this.datos = list;
      this.id = list[0].Id_Reunion;
      //this.asistencia= list[0].asistencia;
      console.log(this.postPvdr.Gasistencia);
      if (this.postPvdr.Gasistencia == null && this.postPvdr.Gmotivo == null) {
        this.valor="Si";
        this.ocultarbotones= false;
      } else {
        if (this.postPvdr.Gasistencia == '0' && this.postPvdr.Gmotivo == null) {
          this.valor = "Sin confirmar";
          this.ocultarbotones= true;
        } else if (this.postPvdr.Gasistencia == '0' && this.postPvdr.Gmotivo != null) {
          this.valor = "No";
          this.ocultarbotones= false;
        } else if (this.postPvdr.Gasistencia == '1' && this.postPvdr.Gmotivo == null) {
          this.valor = "Si";
          this.ocultarbotones= false;  
      }}

    });

  }


  // funcion para recargar datos al cambiar la asistencia

  async recargar(motivo, asistencia){

    console.log(motivo);
    console.log(asistencia);
        this.postPvdr.Gmotivo= motivo;
        this.postPvdr.Gasistencia=asistencia;
        this.cargarReunion();
        if(asistencia==0){
         this.valor= "Si";
        }else if(asistencia == 1){
            this.valor = "No";
        }
 
   }

  public buscarobservacion(){
    
    this.postPvdr.buscarObsereu(this.id).subscribe( data => {
     this.comentarios = data.json();
      });
  }


  //Funcion para ingresar comentarios 
  async enviarComentario(){

    //console.log(new Date().toLocaleDateString());
    if(this.comentario == ""){
      const toast = await this.toastCtrl.create({
      message: 'No hay comentario',
      duration: 3000
      });
      toast.present();
     
     } else {
       let body={
         Id_Reunion: this.id,
         Id_Usuario: this.usuario,
         Fecha:this.fecha,
         Descripcion:this.comentario,
         Tipo: "C"
       }
       console.log(body);
       this.postPvdr.ingreObservr(body).subscribe(
         async data =>{
           this.comentario="";
           this.buscarobservacion();
             
         }
       )
     }
   }
 
   //Funcion para enviar subcomentarios
 
   async enviarSubComentario(idre, idobser){
 
     console.log(idre);
     if(this.comentario1 == ""){
       const toast = await this.toastCtrl.create({
       message: 'No hay comentario',
       duration: 3000
       });
       toast.present();
      } else {
        let body={
          Id_Reunion: idre,
          Id_Usuario: this.usuario,
          Fecha:this.fecha,
          Descripcion:this.comentario1,
          Observacion_ID: idobser,
          tipo:"S"
        }
        console.log(body);
        this.postPvdr.ingreObservr(body).subscribe(
          async data =>{
            this.comentario1="";
            this.buscarobservacion();
          
           
          }
        )
      }
    }


    //funcion para confirmar la asistencia de la reunion
 async confirmarAsist()
{
  const alert = await this.alertController.create({
    header: 'Alerta',
    message: 'Confirma la asistencia de la reunion',
    cssClass: 'alertDanger',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Aceptar',
        handler: () => {
          this.vAsisitencia=1;
          let body = {
            asistencia: this.vAsisitencia,
            motivo: null, 
        };
         this.GuardarConfirmacion(body);
          console.log('Confirm Ok');
        }
      }
    ]
  });
  await alert.present();

}

    // funcion para rechzar la asistencia 

   async rechazarAsist(){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Describa la razon de la inasistencia a la reunion',
      cssClass: 'alertDanger',
      inputs: [
        {
          name: 'razon',
          type: 'text',
          placeholder: 'escriba aqui...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: (input) => {
            this.motivo= input.razon;
            this.vAsisitencia=0;
            let body = {
              asistencia: this.vAsisitencia,
              motivo: this.motivo, 
          };
           this.GuardarConfirmacion(body);
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
    }


    //Funcion para guardar los cambios de la asitencia o inasitencia de la reunion
  GuardarConfirmacion(body) {
    this.postPvdr.actualizarAsist(this.usuario, this.id, body).subscribe(async data => {
      const alert = await this.alertController.create({
        header: 'Asistencia guardada',
        message: 'Exito...!',
        cssClass: 'alertDanger',
        buttons: ['OK']
      });
      await alert.present();
      this.recargar(this.motivo, this.vAsisitencia);
    })
    console.log(this.motivo);
  }


    //Funcion para ocultar o mostrar botones 
  public botones() {
    this.ocultarbotones = this.postPvdr.Gbutunt1;
    if (this.postPvdr.Gtipo == "1" || this.postPvdr.Gtipo == "2") {
      this.ocultarbotones = false;
    }
  }
}
