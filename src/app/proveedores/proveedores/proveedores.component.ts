import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { DialogoConfirmacionComponent } from 'src/app/dialog/dialog.component';
import { proveedor } from 'src/app/model/proveedor';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: proveedor[] = []; 
  page_size:number = 2;
  page_number:number = 1;
  pageSizeOptions = [2, 5, 10]
  constructor(private proveedoresService: ProveedoresService, public dialogo: MatDialog) { }

  ngOnInit(): void {
    this.proveedoresService.getProveedores().subscribe((data)=>{
      this.proveedores = [];
      data.forEach((proveedor)=>{
        this.proveedores.push({
          key: proveedor.key,
          ...proveedor.payload.val() as proveedor
        })
      })
    });
  }

  eliminarProveedor(id):void{
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: "¿Seguro que desea eliminar?"
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          this.proveedoresService.deleteProveedor(id);
        }
      });
  }
  handlePage(event:PageEvent){
    this.page_size = event.pageSize;
    this.page_number = event.pageIndex + 1;
  }
}
