import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';
import { ToastController, ModalController } from '@ionic/angular';
import { ComentariosPage } from '../comentarios/comentarios.page';
@Component({
  selector: 'app-vertarea',
  templateUrl: './vertarea.page.html',
  styleUrls: ['./vertarea.page.scss'],
})
export class VertareaPage implements OnInit {
  datos: any[] = [];
  comentarios: any[] = [];
  id: string= "";
  usuario: string= "";
  fecha;
  fecha1;
  fecha2;
  comentario: string= "";
  comentario1: string= "";
  
  constructor(

    private router:  Router,
    private postPvdr: PostProvider,
    private toastCtrl: ToastController,
    public modalCtr: ModalController
  ) { }

  ngOnInit() {
    this.postPvdr.$getLisTarea.subscribe(list => {
      console.log(list)
      this.datos= list;
      this.id=list[0].Id_tarea;
    
      });
      this.fecha1= new Date().toISOString().substr(0,10);
      this.fecha2= new Date().toISOString().substr(11,8);
      this.fecha= this.fecha1 +' '+ this.fecha2;
      console.log(this.fecha);

      this.postPvdr.$getListSource.subscribe( data => {
        this.usuario=data[0].Id_Usuario;
        console.log(this.id);
        });

        this.buscarobservacion()
  }

 public buscarobservacion(){
    
    this.postPvdr.buscarObser(this.id).subscribe( data => {
     this.comentarios = data.json();
      });
  }

  async enviarComentario(){

   console.log(new Date().toLocaleDateString());
   if(this.comentario == ""){
     const toast = await this.toastCtrl.create({
     message: 'No hay comentario',
     duration: 3000
     });
     toast.present();
    } else {
      let body={
        Id_Tarea: this.id,
        Id_Usuario: this.usuario,
        Descripcion:this.comentario,
        Fecha:this.fecha,
        tipo: "C"
      }
      this.postPvdr.ingreObserv(body).subscribe(
        async data =>{
          this.comentario="";
          this.buscarobservacion();
            
        }
      )
    }
  }

  async enviarSubComentario(idtar, idobser){

    console.log(idtar);
    if(this.comentario1 == ""){
      const toast = await this.toastCtrl.create({
      message: 'No hay comentario',
      duration: 3000
      });
      toast.present();
     } else {
       let body={
         Id_Tarea: idtar,
         Id_Usuario: this.usuario,
         Descripcion:this.comentario1,
         Fecha:this.fecha,
         ObservacionID: idobser,
         tipo:"S"
       }
       this.postPvdr.ingreObserv(body).subscribe(
         async data =>{
           this.comentario1="";
           this.buscarobservacion();
         
          
         }
       )
     }
   }

  async mostrarObs(obser: any[], nombre, apellido, descrip, fech, idt, idu, ido){
  
    const modal = await this.modalCtr.create({
      component: ComentariosPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
       obser,
       nombre,
       apellido,
       descrip,
       fech,
       idt,
       idu,
       ido

      }
    });
    return await modal.present();
    
   
  }

  async mostrartarea(id){
    console.log(id);
    
    this.postPvdr.buscarTareas(id).subscribe(
     (dato) => { // Success
       if(dato !=null){
         //this.tarea1 = dato.json();
       
       this.postPvdr.Gsubta= dato.json();
       console.log(dato.json());
       this.router.navigate(['/versubtareas']);
       }
       
 
     },
     (error) =>{
       console.error(error);
     }
   )
  
 
   }
}
