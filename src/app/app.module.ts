import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import {MaterialModule} from './material.module';
import {Routes, RouterModule} from "@angular/router";
import { AngularFireModule } from 'angularfire2';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from 'angularfire2/firestore';



import { AngularFirestoreModule } from 'angularfire2/firestore';



import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './Body/Body.component';
import { HomeParallaxComponent } from './Body/home-parallax/home-parallax.component';
import { AssistentesComponent } from './Body/assistentes/assistentes.component';
import { FacebookService, InitParams } from 'ngx-facebook';

import {FbsService} from './services/fbs.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListahotelesComponent } from './Body/listahoteles/listahoteles.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { ComentariosComponent } from './Body/comentarios/comentarios.component';




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
    AssistentesComponent,
    ListahotelesComponent,
    Navbar2Component,
    ComentariosComponent
  ],
  imports: [
  
    BrowserModule,
    MaterializeModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, {useHash: true}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
      
  ],
  providers: [FbsService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
