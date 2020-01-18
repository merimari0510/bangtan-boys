import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* ################# CONSULTAS HTTP  ################## */
import { HttpClientModule } from '@angular/common/http'

/* ######## ROUTERS ####### */
import { ROUTES } from './app.routes';
// import { NoimagePipe } from './pipes/noimage.pipe';
// import { LoadingComponent } from './components/shared/loading/loading.component'

/* ######## SERVICES ####### */

/* ######## COMPONENTS ####### */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/pages/shared/navbar/navbar.component';
import { FooterComponent } from './components/pages/shared/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BtsComponent } from './components/pages/bts/bts.component';
import { MembersComponent } from './components/pages/members/members.component';
import { MemberComponent } from './components/pages/member/member.component';
import { DiscographyComponent } from './components/pages/discography/discography.component';
import { AlbumComponent } from './components/pages/album/album.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BtsComponent,
    MembersComponent,
    MemberComponent,
    DiscographyComponent,
    AlbumComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
