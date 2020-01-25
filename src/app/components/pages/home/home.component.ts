import { Component } from '@angular/core';
import { BtsService } from '../../../services/bts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  newAlbums: any[] = [];
  bts_info:any = {};
  members: any[] = [];
  positions: any[] = [];

  constructor( private bts:BtsService ) {
    this.bts.getNewAlbums().subscribe( (data:any) => {
      this.newAlbums = data;
    });
    this.bts.getBTS().subscribe( (data:any) => {
      this.bts_info = data;
    });
    this.bts.getMembers().subscribe( (data:any) => {
      console.log(data);
      this.members = data;
    });
    this.bts.getPositions().subscribe( (data:any) => {
      this.positions = data;
    });
  }

  getNewAlbums() {
    var albums=[];
    for (var i=0; i<this.newAlbums.length; i++) {
      albums[i]=this.bts.getAlbum(this.newAlbums[i]);
      console.log("new album"+i+": "+this.newAlbums[i]);
    }
    return albums;
  }

  showPosition(pos:number) {
    // console.log("Position"+pos);
    return this.positions[pos].name;
  }

}
