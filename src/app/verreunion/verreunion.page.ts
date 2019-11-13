import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController } from '@ionic/angular';

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
  constructor(
    private router:  Router,
    private postPvdr: PostProvider,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  this.cargarReunion();
  this.postPvdr.$getListSource.subscribe( data => {
    this.usuario=data[0].Id_Usuario;
   // console.log(this.id);
    });
    this.fecha1= new Date().toISOString().substr(0,10);
    this.fecha2= new Date().toISOString().substr(11,8);
    this.fecha= this.fecha1 +' '+ this.fecha2;
    this.buscarobservacion();
  }

  cargarReunion(){
    this.postPvdr.$getListReunion.subscribe(list => {
      console.log(list)
      this.datos= list;
      this.id=list[0].Id_Reunion;
      
      });

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
}
