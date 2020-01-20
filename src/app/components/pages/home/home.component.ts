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
      this.members = data;
    });
    this.bts.getPositions().subscribe( (data:any) => {
      this.positions = data;
    });
  }

  showPosition(pos:number) {
    return this.positions[pos].name;
  }

}
