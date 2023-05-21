import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: '/site', pathMatch:'full'},
 { path: 'site', loadChildren: () => import('@components/home/home.module').then(m => m.HomeModule) },
 { path: 'about', loadChildren: () => import('@components/about/about.module').then(m => m.AboutModule) }, 
 { path: 'contact', loadChildren: () => import('@components/contact/contact.module').then(m => m.ContactModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
