import { Injectable } from '@angular/core';
import {  AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { presupuesto } from '../model/presupuesto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  DBNAME:string = "presupuestos";
  private DB:AngularFireList<unknown>;

  constructor(private http: AngularFireDatabase) { 
    this.DB = this.http.list(this.DBNAME);
   }


  public postPresupuesto(presupuesto: presupuesto) {
    return this.DB.push(presupuesto);
  }

  public getPresupuestos(){
    return this.DB.snapshotChanges();
  }

  public getPresupuesto(id){
    return this.http.object(this.DBNAME+ "/" +  id).snapshotChanges();
  }

  public putPresupuesto(id, presupuesto:presupuesto){
    return this.http.object(this.DBNAME+ "/" +  id).update(presupuesto);
  }

  public deletePresupuesto(id){
    return this.http.object(this.DBNAME+ "/" +  id).remove();
  }

  
}
