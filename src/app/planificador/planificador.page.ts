import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-providers';
import { VerperfilPage } from '../verperfil/verperfil.page';
@Component({
  selector: 'app-planificador',
  templateUrl: './planificador.page.html',
  styleUrls: ['./planificador.page.scss'],
})
export class PlanificadorPage implements OnInit {
usuarios: any[]=[];
usuarios1: any[]=[];
rol: string="";
  constructor(private menu: MenuController,
    private postPvdr: PostProvider,
    public modalCtr:ModalController) { }

  ngOnInit() {
    this.menu.close();

    this.postPvdr.getUsers().subscribe(list => {
      this.usuarios= list.json();
      console.log(this.usuarios);

      
    
      });
    
  }

  cargarDatosUsuario(id){
    this.postPvdr.buscarUsers(id).subscribe(
      (data) => { // Success
        console.log(data);
      this.postPvdr.Gusuarioc= data;
      this.usuarios1=data;
      this.rol=data.Rol;
      this,this.perfilModal(this.usuarios1,this.rol);
      //this.datos= this.postPvdr.Globalusuario;
       // console.log(this.datos);
      },)  
  }
  async perfilModal(usuario:any[], rol) {
    // console.log(usuario);
     const modal = await this.modalCtr.create({
       component: VerperfilPage,
       cssClass: 'my-custom-modal-css',
       componentProps: {
        usuario, 
        rol
       }
     });
     return await modal.present();
   }  
}
