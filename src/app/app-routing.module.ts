import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from 'src/app/inicio/inicio.component';
import { ProveedoresComponent } from 'src/app/proveedores/proveedores/proveedores.component';
import { AddproveeComponent } from 'src/app/proveedores/addprovee/addprovee.component';
import { AddpresComponent } from 'src/app/presupuestos/addpres/addpres.component';
import { PresupuestosComponent } from 'src/app/presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from 'src/app/presupuestos/editpres/editpres.component';
import { EditproComponent } from './proveedores/editpro/editpro.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { AutenticacionService } from './servicios/autenticacion.service';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'proveedores', component: ProveedoresComponent, canActivate:[AutenticacionService]},
  {path: 'addprovee', component: AddproveeComponent, canActivate:[AutenticacionService]},
  { path: 'addpres', component: AddpresComponent, canActivate:[AutenticacionService]},
  {path: 'presupuestos', component: PresupuestosComponent, canActivate:[AutenticacionService]},
  {path: 'editpres/:id', component: EditpresComponent, canActivate:[AutenticacionService]},
  {path: 'editpro/:id', component: EditproComponent, canActivate:[AutenticacionService]},
  {path: 'registro', component: RegistroComponent}, 
  { path: 'iniciosesion', component: InisesComponent },
  { path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
