import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-providers';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {
   comentario: string="";
   idtar: string= "";
   usuario: string= "";
   fecha;
   fecha1;
   fecha2;

  constructor(
    public modalCtr: ModalController,
    private toastCtrl: ToastController,
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {
    
    this.fecha1= new Date().toISOString().substr(0,10);
    this.fecha2= new Date().toISOString().substr(11,8);
    this.fecha= this.fecha1 +' '+ this.fecha2;
    console.log(this.fecha);
  }
  closeModal() {
    this.modalCtr.dismiss(
    );}

   

    async enviarComentario(idtar, iduser, idobser){

      console.log(idtar);
      if(this.comentario == ""){
        const toast = await this.toastCtrl.create({
        message: 'No hay comentario',
        duration: 3000
        });
        toast.present();
       } else {
         let body={
           Id_Tarea: idtar,
           Id_Usuario: iduser,
           Descripcion:this.comentario,
           Fecha:this.fecha,
           ObservacionID: idobser,
           tipo:"S"
         }
         this.postPvdr.ingreObserv(body).subscribe(
           async data =>{
             this.comentario="";
           
            
           }
         )
       }
     }
}
