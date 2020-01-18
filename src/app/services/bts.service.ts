import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'; /* Filtrar lo que no queremos del data JSON */

@Injectable({
  providedIn: 'root'
})
export class BtsService {

  constructor( private http:HttpClient ) { }

  getQuery( query:string ) {
    const url = `https://github.com/merimari0510/assets/json${ query }`;

    return this.http.get(url);
  }

  getNewAlbums() {
    console.log("New Albums");

    return this.getQuery('/new-albums')
           .pipe( map( (data:any) => data.albums.items));
  }
  getAlbums() {
    console.log("Albums");
  }

  getAlbum(id:string) {
    console.log("Album" + id);
  }

  getMembers() {
    console.log("Members");
  }

  getMember(id:string) {
    console.log("Member" + id);
  }

  getBTS() {
    console.log("BTS");
  }

  getGallery() {
    console.log("Gallery");
  }
}
