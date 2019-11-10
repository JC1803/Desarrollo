import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-providers';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {
  id: string= "";
  c1: string= "";
  c2: string= "";
  c3: string= "";
  contrasenia: string= "";
  constructor(
    private postPvdr: PostProvider,
    private toastCtrl: ToastController,
    public alertController: AlertController,
    private router:  Router
  ) { }

  ngOnInit() {
    this.postPvdr.$getListSource.subscribe(list => {console.log(list)
      
      //this.dato= list;
      this.id= list[0].Id_Usuario;
      this.contrasenia=atob(list[0].Password);
     // console.log(this.id);
      
  });
}

async actuaContra(){
  if(this.c1 == ""){
    const toast = await this.toastCtrl.create({
    message: 'Falta password Actual',
    duration: 3000
    });
    toast.present();
   } else if (this.c2 == "") {
    const toast = await this.toastCtrl.create({
      message: 'Falta la nueva Password',
      duration: 3000
      });
      toast.present();
   }
   else if (this.c3 == ""){
    const toast = await this.toastCtrl.create({
      message: 'Falta la nueva Password',
      duration: 3000
      });
      toast.present();
   }else if (this.c1 != this.contrasenia){
    const toast = await this.toastCtrl.create({
      message: 'La password actual es INCORRECTO',
      duration: 3000
      });
      toast.present();
   } else if(this.c2 != this.c3){
    const toast = await this.toastCtrl.create({
      message: 'No coiniciden las passwords',
      duration: 3000
      });
      toast.present();

   } else {
    let body= {
      Password: btoa(this.c2)
    };
    this.postPvdr.modUser(body, this.id)
       .subscribe(async data =>{

           const alert = await this.alertController.create({
           header: 'CAMBIO DE PASSWORD',
           message: 'Password actualizada',
           cssClass: 'alertDanger',
           buttons: ['OK']
         });
         await alert.present();
         this.c1="";
         this.c2="";
         this.c3="";
         this.router.navigate(['/perfil']);

        });
   }

   


  

}

}
