import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-providers';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.page.html',
  styleUrls: ['./reunion.page.scss'],
})
export class ReunionPage implements OnInit {
  reuniondetalle: any[] = [];
  datos: any[] = [];
  reunion: any[] = [];
  id: string="";
 public estado: string="";

  constructor(private menu: MenuController,
    private router: Router,
    private postPvdr: PostProvider) {
          

     }

  ngOnInit() {
    this.menu.close();
    this.postPvdr.$getListSource.subscribe(list => {
      //console.log(list)
      this.datos= list;
      this.id=this.datos[0].Id_Usuario;
      console.log(this.id);
      });
      this.estado="Pendiente"; 
      this.cargarReunion();
     

  }

  cargarReunion(){
   
    console.log(this.estado);
    this.postPvdr.getReunionEstado(this.id, this.estado)
    .subscribe(
   (data) => { // Success
     if(data.json()!=null){
     console.log(data.json());
     //this.postPvdr.Gresta= data.json();
     this.reunion = data.json();
   
     }
   },
   (error) =>{
     console.error(error);
   }
 )
     
  }

  async verreunions(id){
    //console.log(id);
    this.postPvdr.getReunion(id).subscribe(
      (dato) => { // Success
        if(dato !=null){
          this.reuniondetalle = dato.json();
        console.log(this.reuniondetalle);
        this.postPvdr.sendListReunion(this.reuniondetalle);
        this.router.navigate(['/verreunion']);
        }
        
  
      },
      (error) =>{
        console.error(error);
      }
    )
 
   }



   segmentChanged(ev: any) {
    
    if(this.estado=="Pendiente"){
      this.cargarReunion();

    } else if (this.estado=="Terminada"){

      this.cargarReunion();
    }

   }

   segmentChanged1(ev: any) {}
}
