import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../classes/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.scss'
})
export class AgregarProductoComponent {

  productoService = inject(ProductoService);
  router = inject(Router)

  producto: Producto = new Producto();

  constructor() { }

  onSubmit() {
    this.guardarProducto();
  }

  guardarProducto() {
    this.productoService.agregarProducto(this.producto).subscribe(
      {
        next: (datos) => {
          this.router.navigate(['/productos']);
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }

}
