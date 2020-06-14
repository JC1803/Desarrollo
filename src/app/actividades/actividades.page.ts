import { Component, OnInit,  ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { PostProvider } from 'src/providers/post-providers';
import { Chart }  from 'chart.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {
  datos: any[] = [];
  id: string="";
  datosdash: any;
  max: number=0;
  max1=100;
  max2: number=0;
  curr: any;
  pendente: number;
  terminada:number;
  vencida:number;
  valor;
current: number;  //pendientes
current1=55;  //terminadas
current2=10;   //vencidas
current3: any;   //efectividad
@ViewChild("doughnutCanvas") doughnutCanvas;
@ViewChild("doughnutCanvas1") doughnutCanvas1;

doughnutChart: any;
doughnutChart1: any;


  constructor(private menu: MenuController,
    private postPvdr: PostProvider,
    private router: Router
   ) { }

  ngOnInit() {
    this.menu.close();

    this.postPvdr.$getListSource.subscribe(list => {
      //console.log(list)
      this.datos= list;
     this.id=this.datos[0].Id_Usuario;
      console.log(this.id);
      });

      this.cargarValores();
  }

  cargarValores(){
    this.postPvdr.getdasboard(this.id)
    .subscribe(
   (data) => { // Success
     if(data !=null){
     //this.postPvdr.Gresta= data.json();
     this.datosdash = data;
     console.log(this.datosdash);
     
     }
   },
   (error) =>{
     console.error(error);
   }
 );
 this.calculopercent();

  }


  ngAfterViewInit(){
    
    setTimeout(() => {
      this.doughnutChart = this.getDoughnutChart();
      this.doughnutChart1 = this.getDoughnutChart1();
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

  getDoughnutChart1(){
    const data = {
      labels: ['Terminadas', 'Pendientes', 'Vencidas'],
      datasets: [{
        label: 'Teste Chart',
        data: [this.datosdash.Total_TerminadaP, this.datosdash.Total_PendienteP, this.datosdash.Total_VencidaP],
        backgroundColor: [
          "rgb(31, 184, 23)",
          "rgb(233, 233, 87)",
          "rgb(255, 0, 0)",
         
        ]
      }]
    }

    return this.getChart(this.doughnutCanvas1.nativeElement, 'doughnut', data);
  }


  

  //Calcula el procentaje
  calculopercent(){
  }

  verdash(valor){
    this.postPvdr.Gdash= valor;
    this.router.navigate(['/verdash']);
  }
}
