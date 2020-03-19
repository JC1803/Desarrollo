import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage implements OnInit {
  datos: any[] = [];
  id2: string="";
  tareas: any[] = [];
  tarea1: any[ ]= [];
  valor: string = "";
  id1: string = "";
  tipo: string = "";
  estado: String="";
  ver: String="1";
  tipousuario: String="";
  responsable: any[] = [];
  participante: any[] = [];
  observador: any[] = [];
  creadas: any[] = [];
  textoBuscar = '';
  
  constructor(private menu: MenuController,
    private router: Router,
    private postPvdr: PostProvider) { }

  ngOnInit() {
    this.menu.close();

    //extrae la lista de usuarios
    this.postPvdr.$getListSource.subscribe(list => {
      //console.log(list)
      this.datos= list;
      this.id2=this.datos[0].Id_Usuario;
      console.log(this.id2);
    });

    this.tipo="1";
    this.tipousuario="1";

   //extraer todas las tareas donde el usuarip loggeado es responsable
    this.postPvdr.getTareasRes(this.id2).subscribe(
      (data) => { // Success
        if(data!=null){
         console.log(data);
         //ojo con la variable demora mucho en mostrar los datos
         this.postPvdr.Gresta = data.filter(
          iniciartareas => iniciartareas.tarea.Id_Tipo_Tarea == 5);
         this.tareas = data;
         this.postPvdr.Gbutunt=true;
         this.postPvdr.Gtipouser= "1";
        }
      },
      (error) =>{
       console.error(error);
      }
    )

    this.iniciarobservardor();
    this.iniciarparticipante();
    this.iniciarresponsable();
    this.iniciarcreadas();

  }


cargarparticipante(){
  this.ver= "1";
  this.postPvdr.getTareasPart(this.id2)
  .subscribe(
    (data) => { // Success
    if(data!=null){
     console.log(data);
     this.postPvdr.Gresta= data;
     this.tareas = data;
     this.postPvdr.Gbutunt=false;
     this.postPvdr.Gtipouser= "3";
    } 
   },
   (error) =>{
     console.error(error);
   }
  )
}

cargarresposable(){
  this.ver= "1"; 
  this.postPvdr.getTareasRes(this.id2)
  .subscribe(
    (data) => { // Success
        if(data!=null){
         console.log(data);
         this.postPvdr.Gresta = data.filter(
          iniciartareas => iniciartareas.tarea.Id_Tipo_Tarea == 5);
        }
      },
      (error) =>{
       console.error(error);
      }
      )
}

cargarobservador(){
  this.ver= "1"; 
  this.postPvdr.getTareasObser(this.id2)
  .subscribe(
  (data) => { // Success
   if(data!=null){
    console.log(data);
    this.postPvdr.Gresta= data;
    this.tareas = data;
    this.postPvdr.Gbutunt=false;
    this.postPvdr.Gtipouser= "2";
   }
  },
  (error) =>{
   console.error(error);
  }
 );

}


cargarcreadas(){
  this.ver="0";
  this.estado="Pendiente"
  this.postPvdr.getTareasCreaP(this.estado,this.id2)
  .subscribe(
  (data) => { // Success
   if(data!=null){
    console.log(data);

    this.postPvdr.Gresta= this.creadas.filter(
      creadas => creadas.Id_Tipo_Tarea === "5");
      console.log(this.responsable);
    //this.tareas = data.json();
    this.postPvdr.Gbutunt=false;
    this.postPvdr.Gtipouser= "4";
   }
  },
  (error) =>{
   console.error(error);
  }
 )
}



  //Funcion para filtro por estado
  segmentChanged1(ev: any) {
    
    if(this.tipousuario=="1" && this.tipo =="1"){
      this.cargarresposable();

  } else  if(this.tipousuario=="2" && this.tipo =="1"){
    this.ver= "1";
   this.postPvdr.Gresta = this.responsable.filter(
   responsable => responsable.tarea.Estado_Tarea === "Pendiente" && responsable.tarea.Id_Tipo_Tarea == 5 );
   console.log(this.responsable);

  } else  if(this.tipousuario=="3" && this.tipo =="1"){
    this.ver= "1";
    this.postPvdr.Gresta = this.responsable.filter(
      responsable => responsable.tarea.Estado_Tarea === "Terminada" && responsable.tarea.Id_Tipo_Tarea == 5);
    console.log(this.responsable);

  }else  if(this.tipousuario=="4" && this.tipo =="1"){
    this.ver= "1";
    this.postPvdr.Gresta = this.responsable.filter(
      responsable => responsable.tarea.Estado_Tarea === "Vencida" && responsable.tarea.Id_Tipo_Tarea == 5);
    console.log(this.responsable);
  } 

   // Observador
   else  if(this.tipousuario=="1" && this.tipo =="2"){
      this.ver= "1";
      this.cargarobservador();

    } else  if(this.tipousuario=="2" && this.tipo =="2"){
      this.ver= "1";
      this.postPvdr.Gresta = this.observador.filter(
        observador => observador.tarea.Estado_Tarea === "Pendiente");

    } else  if(this.tipousuario=="3" && this.tipo =="2"){
      this.ver= "1";
      this.postPvdr.Gresta = this.observador.filter(
        observador => observador.tarea.Estado_Tarea === "Terminada"); 

    }else  if(this.tipousuario=="4" && this.tipo =="2"){
      this.ver= "1";
      this.postPvdr.Gresta = this.observador.filter(
        observador => observador.tarea.Estado_Tarea === "Vencida"); 
    } else

   // Partcipante
    if(this.tipousuario=="1" && this.tipo =="3"){
      this.ver= "1";
     this.cargarparticipante();

    } else  if(this.tipousuario=="2" && this.tipo =="3"){
      this.ver= "1";
      console.log(this.tipousuario);
      this.postPvdr.Gresta = this.participante.filter(
        participante => participante.tarea.Estado_Tarea ==="Pendiente");
       // console.log(this.participante);

    } else  if(this.tipousuario=="3" && this.tipo =="3"){
      this.ver= "1";
      this.postPvdr.Gresta = this.participante.filter(
        participante => participante.tarea.Estado_Tarea === "Terminada");
       // console.log(this.participante);

    }else  if(this.tipousuario=="4" && this.tipo =="3"){
      this.ver= "1";
      this.postPvdr.Gresta = this.participante.filter(
        participante => participante.tarea.Estado_Tarea === "Vencida");
   // Creadas
  } else 
    
   if(this.tipousuario=="1" && this.tipo =="4"){
    this.ver= "0";
   this.cargarcreadas();
    } else  if(this.tipousuario=="2" && this.tipo =="4"){
      this.cargarcreadas();

    } else  if(this.tipousuario=="3" && this.tipo =="4"){
      this.cargarcreadas();

    }else  if(this.tipousuario=="4" && this.tipo =="4"){
      this.cargarcreadas();
    } 

  }


//Funcion para iniciar matrices 
iniciarresponsable(){
  this.postPvdr.getTareasRes(this.id2)
  .subscribe(
  (data) => { // Success
   if(data!=null){
    console.log(data);
    this.responsable= data;
    
   }
  },
  (error) =>{
   console.error(error);
  }
  )

}

iniciarcreadas(){
  this.postPvdr.getTareasCreaP(this.estado,this.id2)
  .subscribe(
  (data) => { // Success
   if(data!=null){
    console.log(data);
    this.creadas= data;
   
   }
  },
  (error) =>{
   console.error(error);
  }
 )
}

iniciarparticipante(){
  this.postPvdr.getTareasPart(this.id2)
      .subscribe(
        (data) => { // Success
        if(data!=null){
         console.log(data);
         this.participante= data;
        
        } 
       },
       (error) =>{
         console.error(error);
       }
      )

}

iniciarobservardor(){
  this.postPvdr.getTareasObser(this.id2)
  .subscribe(
  (data) => { // Success
   if(data!=null){
    console.log(data);
    this.observador= data;
  
   }
  },
  (error) =>{
   console.error(error);
  }
 );
}

//Funcion para filtrar dependiendo del tipo de usuario observador participante y otros
  segmentChanged(ev: any) {
   // Responsable
    this.ver= "1";  
    if(this.tipousuario=="1" && this.tipo =="1"){
        this.cargarresposable();

    } else  if(this.tipousuario=="2" && this.tipo =="1"){
      this.ver= "1";
     this.postPvdr.Gresta = this.responsable.filter(
     responsable => responsable.tarea.Estado_Tarea === "Pendiente" && responsable.tarea.Id_Tipo_Tarea == 5 );
     console.log(this.responsable);

    } else  if(this.tipousuario=="3" && this.tipo =="1"){
      this.ver= "1";
      this.postPvdr.Gresta = this.responsable.filter(
        responsable => responsable.tarea.Estado_Tarea === "Terminada" && responsable.tarea.Id_Tipo_Tarea == 5 );
      console.log(this.responsable);
 
    }else  if(this.tipousuario=="4" && this.tipo =="1"){
      this.ver= "1";
      this.postPvdr.Gresta = this.responsable.filter(
        responsable => responsable.tarea.Estado_Tarea === "Vencida" && responsable.tarea.Id_Tipo_Tarea == 5 );
      console.log(this.responsable);
    } 

     // Observador
     else  if(this.tipousuario=="1" && this.tipo =="2"){
        this.ver= "1";
        this.cargarobservador();

      } else  if(this.tipousuario=="2" && this.tipo =="2"){
        this.ver= "1";
        this.postPvdr.Gresta = this.observador.filter(
          observador => observador.tarea.Estado_Tarea === "Pendiente");
  
      } else  if(this.tipousuario=="3" && this.tipo =="2"){
        this.ver= "1";
        this.postPvdr.Gresta = this.observador.filter(
          observador => observador.tarea.Estado_Tarea === "Terminada"); 

      }else  if(this.tipousuario=="4" && this.tipo =="2"){
        this.ver= "1";
        this.postPvdr.Gresta = this.observador.filter(
          observador => observador.tarea.Estado_Tarea === "Vencida"); 
      } else

     // Partcipante
      if(this.tipousuario=="1" && this.tipo =="3"){
        this.ver= "1";
       this.cargarparticipante();

      } else  if(this.tipousuario=="2" && this.tipo =="3"){
        this.ver= "1";
        console.log(this.tipousuario);
        this.postPvdr.Gresta = this.participante.filter(
          participante => participante.tarea.Estado_Tarea ==="Pendiente");
         // console.log(this.participante);

      } else  if(this.tipousuario=="3" && this.tipo =="3"){
        this.ver= "1";
        this.postPvdr.Gresta = this.participante.filter(
          participante => participante.tarea.Estado_Tarea === "Terminada");
         // console.log(this.participante);

      }else  if(this.tipousuario=="4" && this.tipo =="3"){
        this.ver= "1";
        this.postPvdr.Gresta = this.participante.filter(
          participante => participante.tarea.Estado_Tarea === "Vencida");
     // Creadas
    } else 
      
     if(this.tipousuario=="1" && this.tipo =="4"){
      this.ver= "0";
     this.cargarcreadas();
      } else  if(this.tipousuario=="2" && this.tipo =="4"){
        this.cargarcreadas();

      } else  if(this.tipousuario=="3" && this.tipo =="4"){
        this.cargarcreadas();

      }else  if(this.tipousuario=="4" && this.tipo =="4"){
        this.cargarcreadas();
      } 
    
  }
  
  //Funcion para mostrar tareas
  async mostrartarea(id){
    
   this.postPvdr.buscarTareas(id).subscribe(
    (dato) => { // Success
      if(dato !=null){
        this.tarea1 = dato;
      console.log(dato);
      this.postPvdr.sendListTarea(this.tarea1);
      this.router.navigate(['/vertarea']);
      }
      

    },
    (error) =>{
      console.error(error);
    }
  )
 

  }

  doRefresh(evento){
    this.postPvdr.getTareasRes(this.id2).subscribe(
      (data) => { // Success
        if(data!=null){
         console.log(data);
         //ojo con la variable demora mucho en mostrar los datos
         this.postPvdr.Gresta= data;
         this.tareas = data;
         this.postPvdr.Gbutunt=true;
         this.postPvdr.Gtipouser= "1";
        }
      },
      (error) =>{
       console.error(error);
      }
    )

    this.iniciarobservardor();
    this.iniciarparticipante();
    this.iniciarresponsable();
    this.iniciarcreadas();
  
    setTimeout(() => {
      evento.target.complete();
    }, 2000);
  
  }

//Busqueda
  buscar(event){
    this.textoBuscar=event.detail.value;
  }
}
