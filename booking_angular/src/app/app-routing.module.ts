import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';
import { CuartosComponent } from './reservas/cuartos/cuartos.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'cuartos', component: CuartosComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'aboutus', component: AboutusComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
