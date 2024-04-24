import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../classes/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrl: './producto-lista.component.scss'
})
export class ProductoListaComponent implements OnInit {

  productoService = inject(ProductoService);
  router = inject(Router);

  productos: Producto[];

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos(): void {
    this.productoService.obtenerProductosLista().subscribe(productos => {
      this.productos = productos;
    });
  }

  editarProducto(id: number): void {
    this.router.navigate(['/editarProducto', id]);
  }

  eliminarProducto(id:number): void{
    this.productoService.eliminarProducto(id).subscribe(
      {
        next: (data) => {
          this.obtenerProductos();
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }

}
