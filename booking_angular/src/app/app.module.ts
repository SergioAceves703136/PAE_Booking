import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReservasComponent } from './reservas/reservas.component';
import { CuartosComponent } from './reservas/cuartos/cuartos.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './nav/header/header.component';
import { SidenavListComponent } from './nav/sidenav-list/sidenav-list.component';
import { TabsComponent } from './nav/tabs/tabs.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ReservasComponent,
    CuartosComponent,
    HomeComponent,
    UsuarioComponent,
    AuthComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    SidenavListComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
