import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { Router } from '@angular/router';
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

   //extraer todas las tareas donde el usuarip loggeado es responsable
   this.postPvdr.getTareasRes(this.id2)
   .subscribe(
    (data) => { // Success
    if(data.json()!=null){
    console.log(data.json());
    //ojo con la variable demora mucho en mostrar los datos
    this.postPvdr.Gresta= data.json();
    this.tareas = data.json();
    this.postPvdr.Gbutunt=true;
    this.postPvdr.Gtipouser= "1";
    }
  },
  (error) =>{
    console.error(error);
  }
)

  }
//Funcion para filtrar dependiendo del tipo de usuario observador participante y otros
  segmentChanged(ev: any) {
   // console.log('Segment changed', ev);
    if ( this.tipo == "1"){
      this.postPvdr.getTareasRes(this.id2)
       .subscribe(
      (data) => { // Success
        if(data.json()!=null){
        console.log(data.json());
        this.postPvdr.Gresta= data.json();
        this.tareas = data.json();
        this.postPvdr.Gbutunt=true;
        this.postPvdr.Gtipouser= "1";
        }
      },
      (error) =>{
        console.error(error);
      }
    )
    } else if(this.tipo =="2"){
      this.postPvdr.getTareasObser(this.id2)
      .subscribe(
     (data) => { // Success
       if(data.json()!=null){
       console.log(data.json());
       this.postPvdr.Gresta= data.json();
       this.tareas = data.json();
       this.postPvdr.Gbutunt=false;
       this.postPvdr.Gtipouser= "2";
       }
       

     },
     (error) =>{
       console.error(error);
     }
   )
    } else if(this.tipo == "3"){
      this.postPvdr.getTareasPart(this.id2)
      .subscribe(
     (data) => { // Success
       if(data.json()!=null){
       console.log(data.json());
       this.postPvdr.Gresta= data.json();
       this.tareas = data.json();
       this.postPvdr.Gbutunt=false;
       this.postPvdr.Gtipouser= "3";
       }
       

     },
     (error) =>{
       console.error(error);
     }
   )
    } else if(this.tipo == "4") {

    }
  }
  
  async mostrartarea(id){
    
   this.postPvdr.buscarTareas(id).subscribe(
    (dato) => { // Success
      if(dato !=null){
        this.tarea1 = dato.json();
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
}
