import { Component, OnInit } from '@angular/core';
import {FbsService} from 'app/services/fbs.service'
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-assistentes ',
  templateUrl: './assistentes.component.html',
  styleUrls: ['./assistentes.component.css'],
   host: {'class': 'blue accent-1'}
})
export class AssistentesComponent {
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
}