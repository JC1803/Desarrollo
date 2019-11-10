import { Component, OnInit, Input } from '@angular/core';
import { PostProvider } from 'src/providers/post-providers';
import { AlertController, ToastController } from '@ionic/angular';

//import { TpersonalPage } from '../tpersonal/tpersonal.page';
import { Time } from '@angular/common';


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


  nombre: string = "";
  descripcion: string = "";
  fechai: Date;
  horai: Time;
  fechaf: Date;
  horaf: Time;
  fechacrea:Date;
 
  
  constructor(
    public alertController: AlertController,
    private postPvdr: PostProvider,
    private toastCtrl: ToastController,
    //public personal: TpersonalPage

  ) { }

  ngOnInit() {
    this.cargarTareas();
   
      this.fecha1= new Date().toISOString().substr(0,10);
      this.fecha2= new Date().toISOString().substr(11,8);
      this.fecha= this.fecha1 +' '+ this.fecha2;

      this.postPvdr.$getListSource.subscribe( data => {
        this.usuario=data[0].Id_Usuario;
        console.log(this.id);
        });

        this.buscarobservacion()
  }
  
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
  cargarTareas(){
    this.postPvdr.$getLisTarea.subscribe(list => {
      console.log(list)
      this.datos= list;
      this.id=list[0].Id_tarea;
      });

  }
  buscarobservacion(){
    
    this.postPvdr.buscarObser(this.id).subscribe( data => {
     this.comentarios = data.json();
      });
  }

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
     FechaCreacion: this.fecha1,
     Descripcion: this.descripcion,
     tareasIdTareas: this.id,
     Hora_Inicio: this.horai,
     Hora_Fin: this.horaf,
     tip_tar: "S"
     
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
 limpiar(){
  this.nombre="";
      this.descripcion="";
      this.fechai= null;
      this.fechaf=null;
      this.horaf=null;
      this.horai=null;
 }
  
}
