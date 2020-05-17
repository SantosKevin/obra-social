import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { ImagenesComponent } from "./components/imagenes/imagenes.component";
import { ContactoComponent } from "./components/contacto/contacto.component";

const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'registrarse', component: RegistroComponent },
 { path: 'imagenes', component: ImagenesComponent },
 { path: 'contacto', component: ContactoComponent },
 { path: '**', pathMatch:'full',redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
