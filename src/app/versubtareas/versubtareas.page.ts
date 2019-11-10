import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-versubtareas',
  templateUrl: './versubtareas.page.html',
  styleUrls: ['./versubtareas.page.scss'],
})
export class VersubtareasPage implements OnInit {
  subtareas: any[]= [];
  constructor(
    private postPvdr: PostProvider
  ) { }

  ngOnInit() {
    this.subtareas= this.postPvdr.Gsubta;
  }

}
