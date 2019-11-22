import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'home',loadChildren:() => import('./pages/home/home.module').then(h=>h.HomeModule)},
  {path:'add-new',loadChildren:() => import('./pages/add-endpoint/add-endpoint.module').then(e => e.AddEndpointModule)},
  {path:'run-single',loadChildren:() => import('./pages/run-one/run-one.module').then(r => r.RunOneModule)},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  { path: '**',loadChildren:() => import('./pages/page-not-found/page-not-found.module').then(p=>p.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
