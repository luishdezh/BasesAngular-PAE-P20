import { Component, OnInit } from '@angular/core';
import { Product } from './Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos: Product[];
  busqueda = '';
  resBus: Product[];
  ordBus: Product[];
  b1 = false;
  b2 = false;
  b3 = false;

  constructor() {
    this.productos = [
      new Product(12, 'Smartphone', 'LG', 'Quadcore 3GHZ', 12018.5, 5),
      new Product(123, 'Smartwatch', 'Sony', '3 GB Ram', 4999.9, 0),
      new Product(34, 'SmartTV', 'Sony', '52 pulgadas, Conexión wifi', 8999.9, 3)
    ];
    this.resBus = this.productos;
    this.orderArray();
  }

  ngOnInit(): void {
  }

  buscar(): void {
    console.log(this.b1);
    this.resBus = this.productos.filter(o =>
      o.nombre
      .toUpperCase()
      .includes(this.busqueda.toUpperCase()) ||
      o.descripcion
      .toUpperCase()
      .includes(this.busqueda.toUpperCase()));
    this.orderArray();
  }

  orderArray(): void {
    this.ordBus = this.resBus.slice(0);
    this.ordBus.sort((a, b) => a.precio - b.precio);
  }
}
