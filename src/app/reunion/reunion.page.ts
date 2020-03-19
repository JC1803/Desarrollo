import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-providers';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.page.html',
  styleUrls: ['./reunion.page.scss'],
})
export class ReunionPage implements OnInit {
  reuniondetalle: any[] = [];
  datos: any[] = [];
  reunion: any[] = [];
  id: string = "";
  tipo: string = "";
  ocultar1: string = "1";
  public estado: string = "";
  responsable: any[] = [];
  participante: any[] = [];
  textoBuscar = '';
  constructor(private menu: MenuController,
    private router: Router,
    private postPvdr: PostProvider) {

    this.ocultar1 = "1";
  }

  ngOnInit() {
    this.menu.close();
    this.ocultar1 = "1";
    this.postPvdr.$getListSource.subscribe(list => {
      //console.log(list)
      this.datos = list;
      this.id = this.datos[0].Id_Usuario;
      console.log(this.id);
    });
    this.estado = "Pendiente";
    this.tipo = "1";
    this.cargarReunion();
    this.cargarpartiini();
    this.cragarreposableini();

  }



  cargarReunion() {
    this.ocultar1 = "1";
    this.postPvdr.Gtipo == "1"
    this.postPvdr.Gbutunt1 = false;
    console.log(this.estado);
    this.postPvdr.getReunionEstado(this.id, this.estado)
      .subscribe(
        (data) => { // Success
          if (data != null) {
            console.log(data);
            //this.postPvdr.Gresta= data.json();
            this.reunion = data;

          }
        },
        (error) => {
          console.error(error);
        }
      )
  }



  async verreunions(id, motivo, asistencia) {
    //console.log(id);
    this.postPvdr.getReunion(id).subscribe(
      (dato) => { // Success
        if (dato != null) {
          this.reuniondetalle = dato;
          console.log(this.reuniondetalle);
          this.postPvdr.sendListReunion(this.reuniondetalle);
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
  //cargar datos en la matriz responsable inicialmente 
  cragarreposableini() {
    this.postPvdr.Gtipo == "2"
    // this.postPvdr.Gbutunt1= false;
    this.postPvdr.getReurespon(this.id)
      .subscribe(
        (data) => { // Success
          if (data != null) {
            this.responsable = data;
          }
        },
        (error) => {
          console.error(error);
        }
      )
  }

  //cargar datos en la matriz participante inicialmente
  cargarpartiini() {

    this.postPvdr.getReuparti(this.id)
      .subscribe(
        (data) => { // Success
          if (data != null) {
            this.participante = data;
            // this.postPvdr.Gbutunt1= true;
          }
        },
        (error) => {
          console.error(error);
        }
      )
  }

  //recarga la pagina

  //Carga responsable  cada vez que hay un cambio
  cargarresponsable() {
    this.ocultar1 = "0";
    this.postPvdr.Gbutunt1 = false;
    this.postPvdr.getReurespon(this.id)
      .subscribe(
        (data) => { // Success
          if (data != null) {
            // console.log(data.json());
            //this.postPvdr.Gresta= data.json();
            this.responsable = data;
            console.log(this.responsable);
          }
        },
        (error) => {
          console.error(error);
        }
      )
    if (this.estado == "Pendiente") {


      this.reunion = this.responsable.filter(
        responsable => responsable.reunion.Estado === "Pendiente");
      console.log(this.reunion);

    } else if (this.estado == "Terminada") {
      this.reunion = this.responsable.filter(
        responsable => responsable.reunion.Estado === "Terminada");

    }
  }

  //Carga participante cadas vez que hay cambio 
  cargarparticipante() {
    this.ocultar1 = "0";
    this.postPvdr.Gbutunt1 = true;
    this.postPvdr.getReuparti(this.id)
      .subscribe(
        (data) => { // Success
          if (data != null) {
            console.log(data);
            //this.postPvdr.Gresta= data.json();
            this.participante = data;

          }
        },
        (error) => {
          console.error(error);
        }
      )
    console.log(this.estado);
    if (this.estado == "Pendiente") {
      this.reunion = this.participante.filter(
        participante => participante.reunion.Estado === "Pendiente");
      console.log(this.reunion);

    } else if (this.estado == "Terminada") {
      this.postPvdr.Gbutunt1 = false;
      this.reunion = this.participante.filter(
        participante => participante.reunion.Estado === "Terminada");
      console.log(this.reunion);

    }
  }

  // Funcion que filtara por estado
  segmentChanged(ev: any) {

    if (this.estado == "Pendiente" && this.tipo == "1") {
      this.cargarReunion();

    } else if (this.estado == "Terminada" && this.tipo == "1") {

      this.cargarReunion();
    } else if (this.estado == "Pendiente" && this.tipo == "2") {

      this.cargarresponsable();
    } else if (this.estado == "Terminada" && this.tipo == "2") {

      this.cargarresponsable();
    } else if (this.estado == "Pendiente" && this.tipo == "3") {
      this.estado = "Pendiente";
      this.cargarparticipante();
    } else if (this.estado == "Terminada" && this.tipo == "3") {

      this.cargarparticipante();
    }

  }

  //Funcion que filtra por tipo de usuario (responsable, participante, creadas)
  segmentChanged1(ev: any) {

    if (this.estado == "Pendiente" && this.tipo == "1") {
      this.cargarReunion();

    } else if (this.estado == "Terminada" && this.tipo == "1") {

      this.cargarReunion();
    } else if (this.estado == "Pendiente" && this.tipo == "2") {
      this.estado = "Pendiente";
      this.cargarresponsable();

    } else if (this.estado == "Terminada" && this.tipo == "2") {
      this.estado = "Terminada";
      this.cargarresponsable();

    } else if (this.estado == "Pendiente" && this.tipo == "3") {
      this.estado = "Pendiente";
      this.cargarparticipante();

    } else if (this.estado == "Terminada" && this.tipo == "3") {
      this.estado = "Terminada";
      this.cargarparticipante();

    }




  }
  //busqueda 
  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
  //corregir esta nota
  doRefresh(evento) {
    if (this.estado == "Pendiente" && this.tipo == "1") {
      this.cargarReunion();

    } else if (this.estado == "Terminada" && this.tipo == "1") {

      this.cargarReunion();
    } else if (this.estado == "Pendiente" && this.tipo == "2") {
      this.estado = "Pendiente";
      this.cargarresponsable();

    } else if (this.estado == "Terminada" && this.tipo == "2") {
      this.estado = "Terminada";
      this.cargarresponsable();

    } else if (this.estado == "Pendiente" && this.tipo == "3") {
      this.estado = "Pendiente";
      this.cargarparticipante();

    } else if (this.estado == "Terminada" && this.tipo == "3") {
      this.estado = "Terminada";
      this.cargarparticipante();

    }




    // this.cargarReunion();
    //this.cargarpartiini();
    //this.cargarparticipante();
    //this.cragarreposableini();

    setTimeout(() => {
      evento.target.complete();
    }, 2000);

  }
}

