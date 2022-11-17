import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IsAdminService } from '../../Services/is-admin.service'
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  googleSignIn: any;
  constructor(private fireauth: AngularFireAuth, private Router: Router, private admin: IsAdminService, private firebase: AngularFirestore) { }

  // Login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        if (email === 'maksi@filma.com') {
          this.admin.isAdmin = true;
        }
        this.Router.navigate(['feed']);
      },
      (err) => {
        alert(err.message);
        this.Router.navigate(['/login']);
      }
    )
  }

  //register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        this.firebase.collection('auth').add({ email: email, password: password });
        this.Router.navigate(['/feed']);
      },
      (err) => {
        alert(err.message);
        this.Router.navigate(['/register']);
      }
    )
  }
  // sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.admin.isAdmin = false;
      this.Router.navigate(['login']);
    }, err => {
      alert(err.message);
    }
    )
  }
}
