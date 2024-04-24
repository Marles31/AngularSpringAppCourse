import { Component, inject } from '@angular/core';
import { Producto } from '../../classes/producto';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.scss'
})
export class EditarProductoComponent {

  productoService = inject(ProductoService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  producto: Producto = new Producto();
  id: number;

  constructor() { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productoService.obtenerProductoPorId(this.id).subscribe(
      {
        next: (data) => {
          this.producto = data;
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }

  onSubmit(){
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoService.editarProducto(this.id, this.producto).subscribe(
      {
        next: (data) => {
          this.router.navigate(['/productos']);
        },
        error: (error: any) => {
          console.log(error);
        }
      }
    );
  }

}
