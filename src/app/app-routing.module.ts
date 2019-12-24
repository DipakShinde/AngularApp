import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MobileComponent } from './mobile/mobile.component';


const routes: Routes = [
  { path:"", component:LoginComponent},
  {path:"home", component:HomeComponent,children:[
  {path:"mobile", component:MobileComponent}]},
  {path:"about",component:AboutComponent},
  {path:"contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
