import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/services/auth.service';






@Component({
	selector: 'app-home-parallax',
	templateUrl: './home-parallax.component.html',
	styleUrls: ['./home-parallax.component.css']
})
export class HomeParallaxComponent  {
	
	 email: string;
  password: string;
  

  constructor(public authService: AuthService) {}

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
     
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';   
   
  }

  logout() {
    this.authService.logout();
      
  }
  loginWithFaceBook(){


   this.authService.loginWithFaceBook();



  }

	
	
}
