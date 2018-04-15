import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import {MaterialModule} from './material.module';
import {Routes, RouterModule} from "@angular/router";
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './Body/Body.component';
import { HomeParallaxComponent } from './Body/home-parallax/home-parallax.component';
import { AssistentesComponent } from './Body/assistentes/assistentes.component';


const routes: Routes = [
 { path: '', component: HomeParallaxComponent },
  { path: 'Register', component: AssistentesComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    HomeParallaxComponent,
    AssistentesComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, {useHash: true}),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
