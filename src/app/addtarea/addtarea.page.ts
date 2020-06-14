import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { NavParams, ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { toDate } from '@angular/common/src/i18n/format_date';
import { PostProvider } from 'src/providers/post-providers';
import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { formatDate } from '@angular/common';
import { IfStmt } from '@angular/compiler';
import * as moment from 'moment';

//import { format } from 'path';
@Component({
  selector: 'app-addtarea',
  templateUrl: './addtarea.page.html',
  styleUrls: ['./addtarea.page.scss'],
})
export class AddtareaPage implements OnInit {

  nombre: string = "";
  descripcion: string = "";
  fechai: Date;
  horai: Time;
  fechaf: Date;
  horaf: Time;
  creacion;
  fechacrea:Date;
  idusuario: string = "";
  idtareacreada: string="";
  idtareacreadas: any[]=[];
  horamin;
  tiempo: Time;
  valor;


  constructor(
    public navPar: NavParams,
    public modalCtrl : ModalController,
    public toastCtrl: ToastController,
    private postPvdr: PostProvider,
    private router:  Router,
    @Inject(LOCALE_ID) private locale: string

    ) {
     
     
    
    // this.creacion = new Date().toISOString().substr(0,10);
     this.creacion=  moment().format('YYYY-MM-DD HH:mm:ss');
    //var  casa= new Date();
    // console.log(new Intl.DateTimeFormat('en-US').format(casa));
   // console.log(this.creacion.toISOString());

    // this.creacion=new Date();
//vamos a ver si puedes ver esto puta de mierda
//josetupadre
      // this.creacion = formatDate(new Date().toISOString().substr(0,10), 'dark', this.locale);
     }

  ngOnInit() {
  
   

    
  }


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

  closeModal() {
   this.modalCtrl.dismiss(
   );
  
  }

 async  guardar (id){
   console.log(id);
    if(this.nombre==""){
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
  }else if (this.fechai==null){ 
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
  else{
    let body = {
     // Id_Usuario: "118",
      Id_Usuario: id,
      Estado_Tarea: "Pendiente",
      Id_Tipo_Tarea: "4",
      Nombre: this.nombre,
      FechaInicio: this.fechai,
      FechaFin: this.fechaf,
      FechaCreacion: this.creacion,
      Descripcion: this.descripcion,
      Hora_Inicio: this.horai,
      Hora_Fin: this.horaf,
      tip_tar: "T",
      estadoEliminar:"0"

      //aksi: 'register'
    };

   
    console.log(body);
    this.postPvdr.postTareasP(body).subscribe(async data =>{
      console.log(data);
      //let result: Object = data;
      this.valor= data;
      this.idtareacreada= this.valor.Id_tarea;
     
      console.log(this.idtareacreada);

      let body1={
        Id_Usuario: id,
        Id_Tarea: this.idtareacreada
      };
      console.log(body1);

        this.postPvdr.postResTap(body1).subscribe(async dat =>{
          console.log("correcto");
        });

      const toast = await this.toastCtrl.create({
        message: 'Guardado',
        duration: 3000
      });
      toast.present();
   this.obtenerTareasp(id);
      this.closeModal();
      
    })
    
  }

}

//Funcion para validar hora minima final
 horafinal(event){
  console.log("hola");
 this.horamin= moment(this.horai).add(2, 'hours').format('HH:mm');
 console.log(this.horai);
 }

}
