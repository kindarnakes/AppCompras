import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';
import { presupuesto } from 'src/app/model/presupuesto';
import { DialogoConfirmacionComponent } from 'src/app/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {

  presupuestos: presupuesto[] = [];
  page_size:number = 2;
  page_number:number = 1;
  pageSizeOptions = [2, 5, 10]

  constructor(private presupuestoService: PresupuestosService, public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.presupuestoService.getPresupuestos().subscribe((data) => {
      this.presupuestos = [];
      data.forEach((presupuesto) => {
        this.presupuestos.push({
          key: presupuesto.key,
          ...presupuesto.payload.val() as presupuesto
        });
      }
      )
    })
  }

  eliminarPresupuesto(id):void{
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: "¿Seguro que desea eliminar?"
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.presupuestoService.deletePresupuesto(id);
        }
      });
  }

  handlePage(event:PageEvent){
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }


}
