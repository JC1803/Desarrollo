import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { BienvenidoPage } from '../bienvenido/bienvenido.page';
import { async } from 'q';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  email: string = "";
  nombre= null;
  informacion= null;
  password: string= "";
  user: any[] = [];
  per: any[] = [];
  ejemplo;

  constructor(private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public navCtrl: NavController,
    private menu: MenuController,
 
  	public toastCtrl: ToastController) {
   }

  ngOnInit() {
    this.menu.close('first');

  //  this.menu.swipeEnable(false, 'first');
  
  }
  ionViewDidEnter() {
    this.menu.enable(false,'first');
  }
  

  async prosesLogin(){
   
   
    if(this.email != "" && this.password != ""){
      let body = {
        email: this.email,
        password: btoa(this.password) 
       
      };
   
      this.postPvdr.postLogin(body).subscribe(
        (data) => { // Success
           
          // var alertpesan = data.msg;
          if(data.length != 0){
            this.user = (data);
            //console.log(data);
            this.postPvdr.sendListSource(data);
            this.storage.set('session_storage', data);
            
            //this.storage.get('session_storage').then((val) => {
              //this.postPvdr.sendListSource(val);
              //console.log(val);
            //  });
            
            console.log(data);
            this.router.navigate(['/tabs']);
            this.email="";
            this.password="";
          } else {
             console.log("falso");
             this.Validar();  
            }
        },)  

    }else{
      const toast = await this.toastCtrl.create({
	  	message: 'Campos Vacios. Por favor, ingrese datos en los campos',
	  	duration: 3000
	  });
	  toast.present();
    }
  } 
  async Validar() {
    const toast = await this.toastCtrl.create({
      message: 'El nombre de usuario y contrasenias son incorrectos. Por favor intentalo nuevamente',
      duration: 5000
    });
    toast.present();
  }

  formRegister(){
  	this.router.navigate(['/register']);
  }
}
