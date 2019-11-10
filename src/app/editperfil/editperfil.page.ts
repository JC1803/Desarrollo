import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-providers';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-editperfil',
  templateUrl: './editperfil.page.html',
  styleUrls: ['./editperfil.page.scss'],
})
export class EditperfilPage implements OnInit {
  datos: any[] = [];
  datosu: any[] = [];
  id: string="";

  username: string="";
  apellido: string = "";
  cedula: string = "";
  email: string = "";
  direccion: string="";
  celular: string = "";
  sexo: string = "";
  fecha: string = "";
  intereses: string="";
  facebook: string="";
  twitter: string= "";
  instagram: string= "";
 

  constructor(
    private router:  Router,
    private postPvdr: PostProvider,
    public alertController: AlertController,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.menu.enable(true,'first');
    
      this.cargarDatosUsuarios();

      
  }

 async cargarDatosUsuarios(){
  this.postPvdr.$getListSource.subscribe(list => {
    console.log(list)
    this.datos= list;
  
    this.id=this.datos[0].Id_Usuario;
    

    //console.log(this.sexo);
   // console.log(this.id);
    });
  this.postPvdr.buscarUsers(this.id).subscribe(
    (data) => { // Success
      this.postPvdr.Globalusuario= data;
      this.username = data.Nombre;
    this.apellido = data.Apellido;
    this.cedula = data.Cedula;
    this.email = data.email;
    this.direccion = data.Direccion;
    this.celular = data.Celular;
    this.sexo = data.Sexo;
      this.fecha= data.Fecha_Nacimiento;
      this.facebook= data.Facebook;
      this.twitter= data.Twitter;
      this.instagram= data.Instagram;
      this.intereses= data.Intereses;
      this.postPvdr.Globalusuario= data;

      //console.log(this.datos);
    },)  
  }

async actualizar(){
  let body = {
    Nombre: this.username,
    Apellido: this.apellido,
    Cedula: this.cedula,
    Direccion: this.direccion,
    Celular: this.celular,
    Sexo: this.sexo,
    Instagram: this.instagram, 
    Twitter: this.twitter,
    Facebook:this.facebook,
    Fecha_Nacimiento: this.fecha,
    Intereses: this.intereses
    
};

this.postPvdr.modUser(body, this.id).subscribe(async data=> {
  const alert = await this.alertController.create({
    header: 'Datos Actualizados',
    message: 'Exito...!',
    cssClass: 'alertDanger',
    buttons: ['OK']
  });
  await alert.present();
  this.cargarDatosUsuarios();
//this.router.navigate(['/tabs/perfil']);

});
}

}





