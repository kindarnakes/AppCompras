import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { proveedor } from 'src/app/model/proveedor';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {

  proveedorForm: FormGroup;
  proveedor: proveedor;


  provincias: string[] = [
    'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona',
    'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba',
    'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
    'Guipúzcoa', 'Huelva', 'Huesca', 'IslasBaleares', 'Jaén', 'León', 'Lérida', 'Lugo',
    'Madrid', 'Málaga', 'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas',
    'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
    'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
    'Zamora', 'Zaragoza']





  constructor(private pf: FormBuilder, private proveedoresService: ProveedoresService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.proveedorForm = this.pf.group({
      
    nombre: ['', Validators.required],
    cif: ['', Validators.required],
    direccion: ['', Validators.required],
    cp: ['', Validators.required],
    localidad: ['', Validators.required],
    provincia: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['', [Validators.required, , Validators.email]],
    contacto: ['', Validators.required]
    });
  }

  onSubmit() {
    this.proveedor = this.saveProveedor();
    this.proveedoresService.postProveedor(this.proveedor);
    this.router.navigate(['/proveedores']);
  }

  saveProveedor(){
    const proveedor = {
    nombre: this.proveedorForm.get('nombre').value,
    cif: this.proveedorForm.get('cif').value,
    direccion: this.proveedorForm.get('direccion').value,
    cp: this.proveedorForm.get('cp').value,
    localidad: this.proveedorForm.get('localidad').value,
    provincia: this.proveedorForm.get('provincia').value,
    telefono: this.proveedorForm.get('telefono').value,
    email: this.proveedorForm.get('email').value,
    contacto: this.proveedorForm.get('contacto').value
    };
    return proveedor;
  }
  

}
