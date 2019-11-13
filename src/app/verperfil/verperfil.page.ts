import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-verperfil',
  templateUrl: './verperfil.page.html',
  styleUrls: ['./verperfil.page.scss'],
})
export class VerperfilPage implements OnInit {

  constructor(
    public modalCtr: ModalController
  ) { }

  ngOnInit() {
  }
  //funcion para cerrar el modal
  closeModal() {
    this.modalCtr.dismiss(
    );}
}
