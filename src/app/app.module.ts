import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddpresComponent } from './presupuestos/addpres/addpres.component';
import { PresupuestosService } from './servicios/presupuestos.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { DialogoConfirmacionComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditproComponent } from './proveedores/editpro/editpro.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './autenticacion/inises/inises.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from 'src/app/paginator/paginator-es'


@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpresComponent,
    PresupuestosComponent,
    EditpresComponent,
    DialogoConfirmacionComponent,
    EditproComponent,
    RegistroComponent,
    InisesComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule

  ],
  providers: [ProveedoresService, 
    PresupuestosService, 
    AutenticacionService,
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogoConfirmacionComponent
  ]
})
export class AppModule { }
