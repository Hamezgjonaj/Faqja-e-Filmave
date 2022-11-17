import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseChartService {

  auth: any = getAuth()

  constructor(private firebase: AngularFirestore) { }


  getUser() {
    return this.auth.currentUser
  }
  getUserFirestore() {
  }

  getallUsers() {
    return this.firebase.collection("auth").snapshotChanges()

  }
}
