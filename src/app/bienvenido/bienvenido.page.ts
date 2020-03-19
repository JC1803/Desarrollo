import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';
import { Chart }  from 'chart.js';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  argumento = null;
  datos: any[] = [];
  id: string="";
  max: number=0;
  datosdash;
  textoBuscar = '';
  tareasp: any[] = [];
  tareasreci: any[] = [];
  reunionvigentes: any[] = [];
  @ViewChild("doughnutCanvas") doughnutCanvas;

  doughnutChart: any;


  constructor(private menu: MenuController,
    public _navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private postPvdr: PostProvider,
    private storage: Storage,
    private router: Router

    //private navPr: NavParams

    ) { 
    
  }
  
  ngOnInit() {
    this.menu.close();
    this.postPvdr.$getListSource.subscribe(list => {
      
        this.datos= list;
        this.id=this.datos[0].Id_Usuario;
        console.log(list);
     
    
    
    console.log(this.id);
    });
  
   this.cargarValores();
   this.cargarTareasRecientes();
   this.cargarTareasPersonales();
   this.cargarReunionesVigentes();
   

  }

  ngAfterViewInit(){
    
    setTimeout(() => {
      this.doughnutChart = this.getDoughnutChart();
  
    }, 250)
  }


  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      data,
      options,
      type: chartType
    })
  }


  getDoughnutChart(){
    const data = {
      labels: ['Terminadas', 'Pendientes', 'Vencidas'],
      datasets: [{
        label: 'Teste Chart',
        data: [ this.datosdash.Total_Terminada, this.datosdash.Total_Pendiente, this.datosdash.Total_Vencida],
        backgroundColor: [
          "rgb(31, 184, 23)",
          "rgb(233, 233, 87)",
          "rgb(255, 0, 0)",
         
        ]
      }]
    }

    return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  }


  cargarValores(){
    this.postPvdr.getdasboard(this.id)
    .subscribe(
   (data) => { // Success
     if(data !=null){
     
     //this.postPvdr.Gresta= data.json();
    // this.datosdash = Object.values(data);
    this.datosdash = data;
     console.log(this.datosdash);
     }
   },
   (error) =>{
     console.error(error);
   }
 )
 

  }


  cargarTareasPersonales() {
    this.postPvdr.getTareasP(this.id).subscribe(
      (data) => {
        if (data != null) {
          console.log(data);

          this.tareasp = data.filter(
            tareas => tareas.Estado_Tarea === "Pendiente");

          if (this.tareasp.length > 3) {
            this.tareasp.length = 3;
          }
        }
      },
      (error) => {
        console.error(error);
      }

    )


  }

  cargarTareasRecientes(){

    this.postPvdr.getTareasRes(this.id).subscribe(
      (data) => { // Success
        if(data!=null){
         console.log(data);
         
         this.tareasreci = data.filter(
          tareas => tareas.tarea.Estado_Tarea === "Pendiente" && tareas.tarea.Id_Tipo_Tarea === 5);

          if (this.tareasreci.length > 3) {
            this.tareasreci.length = 3;
          }
       
        }
      },
      (error) =>{
       console.error(error);
      }
    ) 
  }


  cargarReunionesVigentes(){
    this.postPvdr.getReuparti(this.id)
    .subscribe(
   (data) => { // Success
     if(data!=null){
       console.log(data);
      this.reunionvigentes = data.filter(
        reunion => reunion.reunion.Estado === "Pendiente");
     }
     if (this.reunionvigentes.length > 3) {
      this.reunionvigentes.length = 3;
    }
   },
   (error) =>{
     console.error(error);
   }
    )


  }

  doRefresh(evento) {
    this.cargarValores();
    this.cargarTareasRecientes();
    this.cargarTareasPersonales();
    this.cargarReunionesVigentes();

    setTimeout(() => {
      evento.target.complete();
    }, 2000);

  }

  irtareas(){
    this.router.navigate(['/tareas']);
  }
  irreunion(){
    this.router.navigate(['/reunion']);
  }

  irdashboard(){
    this.router.navigate(['/actividades']);
  }

  irtareasp(){
    this.router.navigate(['/tpersonal']);
  }
//Busqueda
  buscar(event){
    this.textoBuscar=event.detail.value;
  }
}
