import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  logged:boolean = false;

  constructor(private authFire: AngularFireAuth, private router: Router, private activatedRouter: ActivatedRoute) {
    this.verifyAuthenticate();
  }

  registroUsuario(userdata) {
    return this.authFire.createUserWithEmailAndPassword(userdata.email, userdata.password)
  }

  inicioSesion(userdata) {
    return this.authFire.signInWithEmailAndPassword(userdata.email, userdata.password)
      
  }

  isAuthenticated() {
    return this.logged;
  }

  verifyAuthenticate(){    
    this.authFire.onAuthStateChanged((user)=>{
      if(user){
        this.logged = true;
      }else{
        this.logged = false;
      }
    })
  }

  logout() { 
    this.authFire.signOut(); 
} 

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if(this.logged){
    return true;
  }else{
    this.router.navigateByUrl('/iniciosesion');
    return false;
  }
}


  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }  

  AuthLogin(provider): Promise<firebase.auth.UserCredential> {
    return this.authFire.signInWithPopup(provider);
  }

}
