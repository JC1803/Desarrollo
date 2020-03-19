import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { PostProvider } from 'src/providers/post-providers';
@Component({
  selector: 'app-verdash',
  templateUrl: './verdash.page.html',
  styleUrls: ['./verdash.page.scss'],
})
export class VerdashPage implements OnInit {

  @ViewChild("doughnutCanvas") doughnutCanvas;
  mensaje: string;
  anio: string;
  mes: string;
  datos: any[]= [];
  datosdash: any;
  datosefectividad: any[]= [];
  id: any;
  max1=1;
  doughnutChart: any;
  constructor(
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {
    this.anio= null;
    this.mes= null;
   
    this.postPvdr.$getListSource.subscribe(list => {
      //console.log(list)
      this.datos= list;
     this.id=this.datos[0].Id_Usuario;
      console.log(this.id);
      });

      if(this.postPvdr.Gdash== '2'){
        this.mensaje= "Resultados Laborales"
      } else if(this.postPvdr.Gdash== '3'){
        this.mensaje= "Resultados Personales"
      }
    this.cargardash();

  }

  

  //Funcion que estructura el grafico
  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      data,
      options,
      type: chartType
    })
  }

//Funcion que define el grafico
  getDoughnutChart(){
    const data = {
      labels: ['Terminadas', 'Pendientes', 'Vencidas'],
      datasets: [{
        label: 'Teste Chart',
        data: [this.datosdash.Total_Terminada, this.datosdash.Total_Pendiente, this.datosdash.Total_Vencida],
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
        data: [3, 3, 3],
        backgroundColor: [
          "rgb(31, 184, 23)",
          "rgb(233, 233, 87)",
          "rgb(255, 0, 0)",
         
        ]
      }]
    }

    return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  }


cargarDashLaboral(){
  console.log(this.mes.substr(5,2));
  console.log(this.anio.substr(0,4));
  this.postPvdr.getdasboardLaboral(this.id, this.anio.substr(0,4), this.mes.substr(5,2))
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
}

cargarDashPersonal(){
  console.log(this.mes.substr(5,2));
  console.log(this.anio);

  this.postPvdr.getdasboardPersonal(this.id, this.anio.substr(0,4), this.mes.substr(5,2))
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
}

cargarEfectividadLaboral(){
  this.postPvdr.getEfectividadLaboral(this.id, this.anio.substr(0,4), this.mes.substr(5,2))
  .subscribe(
 (data) => { // Success
   if(data !=null){
   //this.postPvdr.Gresta= data.json();
   this.datosefectividad = data;
   console.log(this.datosefectividad);
   }
 },
 (error) =>{
   console.error(error);
 }
);
}

cargarEfectividadPersonal(){
  this.postPvdr.getEfectividadPersonal(this.id, this.anio.substr(0,4), this.mes.substr(5,2))
  .subscribe(
 (data) => { // Success
   if(data !=null){
   //this.postPvdr.Gresta= data.json();
   this.datosefectividad = data;
   console.log(this.datosefectividad);
   }
 },
 (error) =>{
   console.error(error);
 }
);
}

  //funcion  para evaluar el tipo de grafico a lanzar
  cargardash() {

if (this.mes == null || this.anio == null){
  this.doughnutChart = this.getDoughnutChart1();
}else{
  if(this.postPvdr.Gdash == '2'){
    
    this.cargarDashLaboral();
    this.cargarEfectividadLaboral();
    this.doughnutChart = this.getDoughnutChart();
   

   }else if (this.postPvdr.Gdash == '3'){
   
     this.cargarDashPersonal();
     this.cargarEfectividadPersonal();
     this.doughnutChart = this.getDoughnutChart();

   }
}

    

  }
}
