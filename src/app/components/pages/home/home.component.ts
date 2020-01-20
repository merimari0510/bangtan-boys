import { Component, OnInit } from '@angular/core';
import { BtsService } from '../../../services/bts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newAlbums: any[] = [];
  bts_info:any;
  members: any[] = [];

  constructor( private bts:BtsService ) {
    this.bts.getNewAlbums().subscribe( (data:any) => {
      /* Obtengo la data, elimino el loading*/
      console.log(data);
      this.newAlbums = data;
    });
    this.bts.getBTS().subscribe( (data:any) => {
      /* Obtengo la data, elimino el loading*/
      console.log(data);
      this.bts = data;
    });
    this.bts.getMembers().subscribe( (data:any) => {
      /* Obtengo la data, elimino el loading*/
      console.log(data);
      this.newAlbums = data;
    });
  }

  ngOnInit() {
  }

}
