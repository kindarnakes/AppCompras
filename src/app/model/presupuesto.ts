export interface presupuesto{
    key?: string
    proveedor: string,
    fecha: Date,
    concepto: string,
    base: number,
    tipo: number,
    iva: number,
    total: number
}