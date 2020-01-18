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
import { xxComponent } from './components/pages/xx/xx.component';

@NgModule({
  declarations: [
    AppComponent,
    xxComponent
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
