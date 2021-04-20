import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  { path: '', component: ListarProductosComponent},
  { path: 'crear-producto', component: CrearProductoComponent},
  { path: 'editar-producto/:id', component: CrearProductoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'} //Si en la URL se le pasa un parametro que no existe se redirige al componente raiz.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
