import { Injectable } from '@angular/core';
import {  AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { proveedor } from '../model/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  DBNAME:string = "proveedores";
  private DB:AngularFireList<unknown>;

  constructor(private http: AngularFireDatabase) { 
    this.DB = this.http.list(this.DBNAME);
   }


   public postProveedor(Proveedor: proveedor) {
    return this.DB.push(Proveedor);
  }

  public getProveedores(){
    return this.DB.snapshotChanges();
  }

  public getProveedor(id){
    return this.http.object(this.DBNAME+ "/" +  id).snapshotChanges();
  }

  public putProveedor(id, Proveedor:proveedor){
    return this.http.object(this.DBNAME+ "/" +  id).update(Proveedor);
  }

  public deleteProveedor(id){
    return this.http.object(this.DBNAME+ "/" +  id).remove();
  }



}
