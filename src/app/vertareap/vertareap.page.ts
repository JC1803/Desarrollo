import { Component, OnInit, Input } from '@angular/core';
import { PostProvider } from 'src/providers/post-providers';
import { AlertController, ToastController } from '@ionic/angular';
import { Time } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-vertareap',
  templateUrl: './vertareap.page.html',
  styleUrls: ['./vertareap.page.scss'],
})
export class VertareapPage implements OnInit {
  datos: any[] = [];
  comentarios: any[] = [];
  tareasdetalle: any[] = [];
  id: string= "";
  usuario: string= "";
  fecha;
  fecha1;
  fecha2;
  comentario: string= "";
  titulo: string= "";
  creacion;

  nombre: string = "";
  descripcion: string = "";
  fechai: Date;
  horai: Time;
  fechaf: Date;
  horaf: Time;
  fechacrea:Date;
  public ocultar: boolean = true;
  estado: string= "";

  constructor(
    public alertController: AlertController,
    private postPvdr: PostProvider,
    private toastCtrl: ToastController,
    //public personal: TpersonalPage

  ) { }

  ngOnInit() {
    this.cargarTareas();
    this.botones();
      
      this.fecha1= new Date().toISOString().substr(0,10);
      this.fecha2= new Date().toISOString().substr(11,8);
     // this.fecha= this.fecha1 +' '+ this.fecha2;
      this.fecha= moment().format('YYYY-MM-DD HH:mm:ss');
     
      this.creacion=  moment().format('YYYY-MM-DD HH:mm:ss');
      this.postPvdr.$getListSource.subscribe( data => {
        this.usuario=data[0].Id_Usuario;
       
        console.log(this.id);
        });
 
        this.buscarobservacion()
       
  }
  

//Funcion para esconder o mostrar el boton de terminar tarea
  public botones(){
    
   console.log(this.ocultar);
   console.log(this.estado);
   // console.log(this.postPvdr.Gtipouser);

    if( this.estado=="Terminada"){
         this.ocultar=false;
    }
  }

  //Funcion para recargar las tarea cuando se crea una subtarea
  async recargarSubta(id) {
    this.postPvdr.buscarTareas(id).subscribe(
      (dato) => { // Success
        if(dato !=null){
          this.tareasdetalle = dato;
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

  //funcion para buscar la observaciones que tiene la tarea
  buscarobservacion(){
    
    this.postPvdr.buscarObser(this.id).subscribe( data => {
     this.comentarios = data;
      });
  }
 // funcion para enviar la observacion a la tarea
  async enviarComentario(){

    console.log(new Date());
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

   //metodo que no lo uso

  async addTareap() {
    const alert = await this.alertController.create({
      header: 'Añadir Actividad',
      inputs: [
        {
          name: 'titulo',
          value: 'titulo',
          placeholder: 'Titulo'
        },
       
        {
          name: 'descrip',
          type: 'text',
          placeholder: 'Descripción'
        },
      
        // input date with min & max
        {
          name: 'fechain',
          label: 'Fecha Inicio',
          type: 'date'
         
        },
        {
          name: 'horai',
          type: 'time'
        },
        {
          name: 'fechafin',
          label: 'Fecha Fin',
          type: 'date'
         
        },
        // input date without min nor max
        
        {
          name: 'horaf',
          label: 'Hora Fin',
          type: 'time'
        
        
        },
      
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {

           this.guardarSubtarea( )
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }



 //Funcion para guardar un subtarea
 async guardarSubtarea(){
    if(this.nombre ==''){
      const toast = await this.toastCtrl.create({
        message: 'Falta Nombre de tarea',
        duration: 3000
      });
      toast.present();
  
  }else if (this.descripcion==''){ 
    const toast = await this.toastCtrl.create({
      message: 'Falta Descripción',
      duration: 3000
    });
    toast.present();
  }
  else if (this.fechai==null){ 
    const toast = await this.toastCtrl.create({
      message: 'Falta fecha de inicio de tarea',
      duration: 3000
    });
    toast.present();
  }else if (this.fechaf==null){ 
    const toast = await this.toastCtrl.create({
      message: 'Falta fecha de fin de tarea',
      duration: 3000
    });
    toast.present();
  }else if (this.horai==null){ 
    const toast = await this.toastCtrl.create({
      message: 'Falta hora de inicio de tarea',
      duration: 3000
    });
    toast.present();
  }else if (this.horaf==null){ 
    const toast = await this.toastCtrl.create({
      message: 'Falta hora final de tarea',
      duration: 3000
    });
    toast.present();
  }
  else{let body = {
    // Id_Usuario: "118",
     Id_Usuario: this.usuario,
     Estado_Tarea: "Pendiente",
     Id_Tipo_Tarea: "4",
     Nombre: this.nombre,
     FechaInicio: this.fechai,
     FechaFin: this.fechaf,
     FechaCreacion: this.creacion,
     Descripcion: this.descripcion,
     tareasIdTareas: this.id,
     Hora_Inicio: this.horai,
     Hora_Fin: this.horaf,
     tip_tar: "S",
     estadoEliminar:"0"
  };

  console.log(body);
    this.postPvdr.postTareasP(body).subscribe(async data =>{
      const toast = await this.toastCtrl.create({
        message: 'Guardado',
        duration: 3000
      });
      toast.present();
     // this.personal.obtenerTareasp();
      this.recargarSubta(this.id);
      this.cargarTareas();
      this.limpiar();
    
    })
    
 }

   //aksi: 'register'
 };

 //Funcion para limpiar los iputs al ingresar subtarea
 limpiar(){
  this.nombre="";
      this.descripcion="";
      this.fechai= null;
      this.fechaf=null;
      this.horaf=null;
      this.horai=null;
      
 }
   

 //Funcion para obtenr las tareas una vez que se ha actualizado algun campo
 public obtenerTareasp(id2){
  this.postPvdr.getTareasP(id2).subscribe(
    (data) => {
     if(data!= null){
       console.log(data);
       this.postPvdr.Globaltpersonal= data.sort(function(a,b){
        return a.FechaCreacion - b.FechaCreacion;
      }).reverse().filter(tareasmostrar=> tareasmostrar.estadoEliminar === 0);
      
        
      }
    },
    (error)=> {
    console.error(error);
    }

  )
 }

 //Funcion para confirmar la terminacion de una tarea
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
    this.ocultar=false;
    toast.present();
   this.recargarSubta(this.id);
    this.cargarTareas();
    this.obtenerTareasp(this.usuario);
  //this.router.navigate(['/tabs/perfil']);
  });

 }

}
