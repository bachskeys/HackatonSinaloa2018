import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';




@Component({
	selector: 'app-home-parallax',
	templateUrl: './home-parallax.component.html',
	styleUrls: ['./home-parallax.component.css']
})
export class HomeParallaxComponent implements OnInit {
	items: Observable<any[]>;
	habitaciones: Observable<any[]>;
	reviews: Observable<any[]>;
	constructor(private db: AngularFirestore) {

		
	}

	ngOnInit() {
		this.items = this.db.collection('Hoteles').valueChanges();
		this.habitaciones = this.db.collection('Habitaciones', ref => ref.where('Id_Hotel', '==', 1)).valueChanges();
		this.reviews = this.db.collection('Review', ref => ref.where('Id_Hotel', '==', 1)).valueChanges();
	}

	
	
}
