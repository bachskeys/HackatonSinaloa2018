import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userFlag:boolean;

  constructor(private firebaseAuth: AngularFireAuth, private db: AngularFirestore) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.userFlag=true;
        let newUser = this.db.collection<any>('Usuario');
        newUser.add({email:email,password:password, Imagen: "https://firebasestorage.googleapis.com/v0/b/hackaton-17e3d.appspot.com/o/default-profile.png?alt=media&token=c68bc8b8-3da1-4cda-a89f-41cac7fd928b"});
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
         this.userFlag=true;
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
    .auth.signOut().then(value => {
    console.log('Sing out sucessful', value);
    this.userFlag=false;
}).catch(function(error) {
  // An error happened.
});
  }
  loginWithFaceBook(){



this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(value => {
        console.log('Nice, it worked!',value);
         this.userFlag=true;
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

}