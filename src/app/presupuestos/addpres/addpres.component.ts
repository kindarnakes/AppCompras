import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { PresupuestosService } from 'src/app/servicios/presupuestos.service';
import { presupuesto } from 'src/app/model/presupuesto'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent implements OnInit {

  presupuestoForm: FormGroup;
  presupuesto: presupuesto;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  constructor(private pf: FormBuilder, private presupuestosService: PresupuestosService, private router: Router) { }

  ngOnInit(): void {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', [Validators.required, Validators.minLength(10)]],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      iva: this.iva,
      total: this.total
    });
    this.onChanges();
  }
  onChanges(): void {
    this.presupuestoForm.valueChanges.subscribe((valor) => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.presupuestosService.postPresupuesto(this.presupuesto);
    
    this.router.navigate(['/presupuestos']);

    
  }

  savePresupuesto() {
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.base * this.tipo,
      total: this.base + (this.base * this.tipo)
    };
    return savePresupuesto;
  }

}
