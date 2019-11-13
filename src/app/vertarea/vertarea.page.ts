import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';
import { ToastController, ModalController, AlertController } from '@ionic/angular';
import { ComentariosPage } from '../comentarios/comentarios.page';
@Component({
  selector: 'app-vertarea',
  templateUrl: './vertarea.page.html',
  styleUrls: ['./vertarea.page.scss'],
})
export class VertareaPage implements OnInit {
  datos: any[] = [];
  comentarios: any[] = [];
  tareasdetalle: any[] = [];
  id: string= "";
  usuario: string= "";
  fecha;
  fecha1;
  fecha2;
  comentario: string= "";
  comentario1: string= "";
  public ocultar1: boolean;
  estado: string= "";

  constructor(

    private router:  Router,
    private postPvdr: PostProvider,
    private toastCtrl: ToastController,
    public modalCtr: ModalController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    
   this.cargarTareas();
      this.botones();
      this.fecha1= new Date().toISOString().substr(0,10);
      this.fecha2= new Date().toISOString().substr(11,8);
      this.fecha= this.fecha1 +' '+ this.fecha2;
     // console.log(this.fecha);

      this.postPvdr.$getListSource.subscribe( data => {
        this.usuario=data[0].Id_Usuario;
       // console.log(this.id);
        });

        this.buscarobservacion()
  }

  //Funcion para recargar las tarea cuando se crea una subtarea
  async recargarSubta(id) {
    this.postPvdr.buscarTareas(id).subscribe(
      (dato) => { // Success
        if(dato !=null){
          this.tareasdetalle = dato.json();
        console.log(dato);
        this.postPvdr.sendListTarea(this.tareasdetalle);
        }
      },
      (error) =>{
        console.error(error);
      }
    )
    
  }

   //Funcion para mostrar la tarea
   cargarTareas(){
    this.postPvdr.$getLisTarea.subscribe(list => {
      console.log(list)
      this.datos= list;
      this.id=list[0].Id_tarea;
      this.estado= list[0].Estado_Tarea;
      });

  }

  //Funcion para ocultar o mostrar el boton de terminar tarea
  public botones(){
    this.ocultar1= this.postPvdr.Gbutunt;
   // console.log(this.ocultar1);
  //  console.log(this.estado);
   // console.log(this.postPvdr.Gtipouser);

    if(this.postPvdr.Gtipouser== "1" && this.estado=="Terminada"){
         this.ocultar1=false;
    }
  }

  //Funcion para cargar las observaciones de la tarea
 public buscarobservacion(){
    
    this.postPvdr.buscarObser(this.id).subscribe( data => {
     this.comentarios = data.json();
      });
  }

//Funcion para ingresar comentarios 
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

  //Funcion para enviar subcomentarios

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

   //funcion es para mostrar las observaciones opcion 2 (no la uso)

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
//funciona para almacenar las subtareas de subtareas
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
   //Funcion para obtenr las tareas una vez que se ha actualizado algun campo
 public obtenerTareasR(id2){
  this.postPvdr.getTareasRes(id2)
  .subscribe(
   (data) => { // Success
   if(data.json()!=null){
   console.log(data.json());

   this.postPvdr.Gresta = data.json();
   this.postPvdr.Gbutunt=false;
   this.postPvdr.Gtipouser= "1";
   }
 },
 (error) =>{
   console.error(error);
 }
)
 }


//Funcion para preguntar si desea terminar la tarea
   async confirmaract(){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Desea terminar con la Tarea',
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
           this.terminarTarea( );
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
   }
  
   //Funcion para terminar la tarea guardar los cambios
   async terminarTarea(){
     //console.log("llamo");
     let body2 ={
      Estado_Tarea: "Terminada",
      FechaEntrega: this.fecha
     };
     this.postPvdr.postTarea(body2, this.id).subscribe(async data=> {
      const toast = await this.toastCtrl.create({
        message: 'Tarea finalizada con exito',
        duration: 4000
      });
      toast.present();
     this.recargarSubta(this.id);
      this.cargarTareas();
      this.botones();
      this.obtenerTareasR(this.usuario);
    //this.router.navigate(['/tabs/perfil']);
    });
  
   }
}
