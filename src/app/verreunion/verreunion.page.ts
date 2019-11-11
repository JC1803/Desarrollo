import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-verreunion',
  templateUrl: './verreunion.page.html',
  styleUrls: ['./verreunion.page.scss'],
})
export class VerreunionPage implements OnInit {
  datos: any[]=[];
  id : String= "";

  constructor(
    private router:  Router,
    private postPvdr: PostProvider,

  ) { }

  ngOnInit() {
  this.cargarReunion();

  }

  cargarReunion(){
    this.postPvdr.$getListReunion.subscribe(list => {
      console.log(list)
      this.datos= list;
      this.id=list[0].Id_Reunion;
      
      });

  }

}
