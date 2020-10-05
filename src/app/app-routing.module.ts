import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { CompleteComponent } from './pages/complete/complete.component';
import { CreateComponent } from './pages/create/create.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'create',
  component: CreateComponent
},
{
  path: 'complete',
  component: CompleteComponent
},
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
