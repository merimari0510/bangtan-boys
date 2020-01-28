import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'; /* Filtrar lo que no queremos del data JSON */

@Injectable({
  providedIn: 'root'
})
export class BtsService {

  constructor( private http:HttpClient ) {
    console.log('BTS service app service work!')
  }

  getQuery( query:string ) {
    const url = `https://merimari0510.github.io/bangtan-boys/src/assets/json/${ query }.json`;

    const headers = new HttpHeaders();

    return this.http.get(url, { headers });
  }

  getNewAlbums() {
    return this.getQuery('albums').pipe( map( (data:any) => data.new_albums));
  }

  getAlbums() {
    console.log("Albums");
  }

  getAlbum(id:string) {
    console.log("Album" + id);

    return this.getQuery('albums/' + id).pipe( map( (data:any) => data));;
  }

  getMembers() {
    console.log("Members");
    return this.getQuery('bts').pipe( map( (data:any) => data.members));
  }

  getMember(id:string) {
    console.log("Member" + id);
  }

  getBTS() {
    return this.getQuery('bts').pipe( map( (data:any) => data.bts));
  }

  getImagesBTS() {
    return this.getQuery('bts').pipe( map( (data:any) => data.bts.images));
  }

  getPositions() {
    return this.getQuery('bts').pipe( map( (data:any) => data.positions));
  }

  getGallery() {
    console.log("Gallery");
  }
}
