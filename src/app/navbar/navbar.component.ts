import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor() { }

  ngOnInit() {


  }

    title = "Hackathon2018";
   imagenes ={ img1:"src/assets/img/descarga.jpg"};


}
