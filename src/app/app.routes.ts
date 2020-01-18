import { Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { BtsComponent } from './components/pages/bts/bts.component';
import { MembersComponent } from './components/pages/members/members.component';
import { MemberComponent } from './components/pages/member/member.component';
import { DiscographyComponent } from './components/pages/discography/discography.component';
import { AlbumComponent } from './components/pages/album/album.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bts', component: BtsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'member:id', component: MemberComponent },
  { path: 'discography', component: DiscographyComponent },
  { path: 'album:id', component: AlbumComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
