import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  argumento = null;
  datos: any[] = [];
  constructor(private menu: MenuController,
    public _navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private postPvdr: PostProvider,
    private router: Router

    //private navPr: NavParams

    ) { 
    
  }
  
  ngOnInit() {
    this.menu.close();
    this.postPvdr.$getListSource.subscribe(list => {
    this.datos= list;
    });
  
   

  }

  irtareas(){
    this.router.navigate(['/tareas']);
  }
  irreunion(){
    this.router.navigate(['/reunion']);
  }

  irdashboard(){

  }
}
