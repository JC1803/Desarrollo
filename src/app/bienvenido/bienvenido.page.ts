import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';
import { Chart }  from 'chart.js';
import { Storage } from '@ionic/Storage';
import { Platform } from '@ionic/angular';

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
  mostrtap: any[]=[];
  mostrtal: any[]=[];
  mostrreu: any[]=[];

  @ViewChild("doughnutCanvas") doughnutCanvas;

  doughnutChart: any;


  constructor(private menu: MenuController,
    public _navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private postPvdr: PostProvider,
    private storage: Storage,
    private router: Router,
    public platform: Platform
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
    this.doughnutChart = this.getDoughnutChart();
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

  mostrartareap(id){
    this.postPvdr.buscarTareas(id).subscribe(
      (dato) => { // Success
        if(dato !=null){
          this.mostrtap = dato;
        console.log(dato);
        this.postPvdr.sendListTarea(this.mostrtap);
        this.router.navigate(['/vertareap']);
        }
        
  
      },
      (error) =>{
        console.error(error);
      }
    )

  }

  mostrartareat(id){
    this.postPvdr.buscarTareas(id).subscribe(
      (dato) => { // Success
        if(dato !=null){
          this.mostrtal = dato;
        console.log(dato);
        this.postPvdr.sendListTarea(this.mostrtal);
        this.router.navigate(['/vertarea']);
        }
        
  
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  mostrarreunion(id, motivo, asistencia){
    this.postPvdr.getReunion(id).subscribe(
      (dato) => { // Success
        if (dato != null) {
          this.mostrreu = dato;
          console.log(this.mostrreu);
          this.postPvdr.sendListReunion(this.mostrreu);
          this.postPvdr.Gmotivo = motivo;
          this.postPvdr.Gasistencia = asistencia;

          this.router.navigate(['/verreunion']);
        }


      },
      (error) => {
        console.error(error);
      }
    )

    
  }
}
