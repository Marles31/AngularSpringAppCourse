import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../classes/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = 'http://localhost:8080/inventario-app/productos';

  httpClient = inject(HttpClient);

  constructor() { }

  obtenerProductosLista(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.baseUrl);
  }

  agregarProducto(producto: Producto): Observable<Object>{
    return this.httpClient.post<Producto>(this.baseUrl, producto);
  }

  obtenerProductoPorId(id: number){
    return this.httpClient.get<Producto>(`${this.baseUrl}/${id}`);
  }

  editarProducto(id: number, producto: Producto): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<Object>{
    return this.httpClient.delete<Producto>(`${this.baseUrl}/${id}`);
  }

}
