import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  googleSignIn: any;
  constructor(private fireauth: AngularFireAuth, private Router: Router) { }

  // Login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.Router.navigate(['admin']);
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
        alert('Rrgistration successful');
        this.Router.navigate(['/register']);
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
      this.Router.navigate(['login']);
    }, err => {
      alert(err.message);
    }
    )
  }
}
