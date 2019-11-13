import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { Storage } from '@ionic/Storage';
import { HttpClient} from '@angular/common/http';
import { async } from '@angular/core/testing';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  areas: any[] = [];
  area: string="";
  roles: any[] = [];
  rol: string="";
  subareas: any[] = [];
  subarea: string="";
  fechanac: Date;
  registros: any[] = [];
  iduser: string= "";
  facebook: string="";
  twitter: string= "";
  instagram: string= "";
  intereses: string= "";
 
  username: string = "";
  apellido: string = "";
  cedula: string = "";
  email: string = "";
  direccion: string = "";
  celular: string = "";
  password: string = "";
  confirm_password: string = "";
  sexo: string = "";
  tipousuario: string = "";

  constructor( 
    private router:  Router,
    private postPvdr: PostProvider,
    private storage: Storage,
    public alertController: AlertController,
    public toastCtrl: ToastController,
    public httpClient: HttpClient,
    private menu: MenuController
  ) { }

  ngOnInit() {
   // this.menu.enable(false,'first');
    

  
    this.postPvdr.getArea() .subscribe(
      (data) => { // Success
        if(data.json()!=null){
          //console.log(data.json());
          this.areas = data.json();
        }
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  ionViewDidEnter() {
    this.menu.enable(false,'first');
  }

  clicAre($event){
    this.subareas= [""];
    this.roles= [""];
    
      console.log(this.area);
      this.postPvdr.getSubareas(this.area).subscribe(
        (dato)=>{ 
          this.subareas =dato.json();
        } 
      )

      this.rol="";
  }

  clicSuba ($event){
    
    console.log(this.subarea);
    this.postPvdr.getRoles(this.subarea).subscribe(
      (dato)=>{
        this.roles =dato.json();
      }
   )
  }
 
  async registro(){
    if(this.username==""){
        const toast = await this.toastCtrl.create({
          message: 'Falta Nombre',
          duration: 3000
        });
        toast.present();
    }else if(this.apellido==""){
          const toast = await this.toastCtrl.create({
          message: 'Falta Apellido',
          duration: 3000
        });
        toast.present();
      }else if(this.fechanac==null){
        const toast = await this.toastCtrl.create({
        message: 'Falta Fecha de nacimiento',
        duration: 3000
      });
      toast.present();
    }else if(this.cedula==""){
      const toast = await this.toastCtrl.create({
      message: 'Falta cedula',
      duration: 3000
    });
    toast.present();
  }else if(this.direccion==""){
    const toast = await this.toastCtrl.create({
    message: 'Falta Direccion',
    duration: 3000
  });
  toast.present();
      }else if(this.password==""){
          const toast = await this.toastCtrl.create({
          message: 'Falta Password',
          duration: 3000
        });
        toast.present();
      }else if(this.cedula==""){
        const toast = await this.toastCtrl.create({
        message: 'Falta número de celular',
        duration: 3000
      });
      toast.present();
    }else if(this.sexo==""){
      const toast = await this.toastCtrl.create({
      message: 'Falta su sexo',
      duration: 3000
    });
    toast.present();
  }else if(this.tipousuario==""){
    const toast = await this.toastCtrl.create({
    message: 'Falta Apellido',
    duration: 3000
  });
  toast.present();
}else if(this.area==""){
  const toast = await this.toastCtrl.create({
  message: 'Falta seleccionar área',
  duration: 3000
});
toast.present();
}else if(this.subarea==""){
  const toast = await this.toastCtrl.create({
  message: 'Falta seleccionar subarea',
  duration: 3000
});
toast.present();
}else if(this.rol==""){
  const toast = await this.toastCtrl.create({
  message: 'Falta seleccionar rol',
  duration: 3000
});
toast.present();
}else if(this.intereses==""){
  const toast = await this.toastCtrl.create({
  message: 'Falta intereses',
  duration: 3000
});
toast.present();
    }else if(this.password!=this.confirm_password){
          const toast = await this.toastCtrl.create({
          message: 'No coiniciden las passwords',
          duration: 3000
        });
        toast.present();
    }else if(this.email==""){
          const toast = await this.toastCtrl.create({
          message: 'Falta email',
          duration: 3000
          });
        toast.present();
    }else{
     
      let body = {
        Nombre: this.username,
        Apellido: this.apellido,
        Cedula: this.cedula,
        email: this.email,
        Direccion: this.direccion,
        Celular: this.celular,
        Sexo: this.sexo,
        Id_tipo_Usuarios : this.tipousuario,
        Password: btoa(this.password),
        Instagram: this.instagram, 
        Twitter: this.twitter,
        Facebook:this.facebook,
        Fecha_Nacimiento: this.fechanac,
        Intereses: this.intereses
        //aksi: 'register'
      };
      
      
      console.log(body);
      this.postPvdr.postUser(body)
       .subscribe(async data =>{
           var alertpesan = data.msg;
           this.registro= data;
           this.iduser=data.Id_Usuario;
           console.log(this.iduser);
           const alert = await this.alertController.create({
           header: 'FELICITACIONES',
           message: 'El registro ha sido exitoso',
           cssClass: 'alertDanger',
           buttons: ['OK']
         });
    
         console.log(this.iduser);

         let body2 = {
           Id_Area: this.area,
           Id_Roles:this.rol,
           Id_Usuario:this.iduser
         }
         console.log(body2);
         this.postPvdr.postUsuariosRoles(body2).subscribe(
           (datos)=>{
          
         })
         await alert.present();
      
  
         if(data.succesful){
       
           const toast = await this.toastCtrl.create({
           message: 'Register succesful',
           duration: 3000
            });
            toast.present();
          
          }else{
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
       
        
       }
       
       );
       
      
      this.router.navigate(['/login']);
    }

  
  }
}
