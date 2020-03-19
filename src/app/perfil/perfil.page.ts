import { Component, OnInit } from '@angular/core';
import { PostProvider } from '../../providers/post-providers';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  dato: any[] = [];
  datos: any[] = [];
  id: string= "";
  constructor(
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {
    this.postPvdr.$getListSource.subscribe(list => {
      this.id = list[0].Id_Usuario;
      console.log(this.id);
    });
    this.cargarDatosUsuario();
  }


  cargarDatosUsuario() {
    this.postPvdr.buscarUsers(this.id).subscribe(
      (data) => { // Success
        console.log(data);
        this.datos= data;
        this.postPvdr.Globalusuario = this.datos;
      })
  }

 // ionViewWillEnter(){
   // this.cargarDatosUsuario()
 // }
  //ionViewDidEnter(){
  //}
}
