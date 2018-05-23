
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component'

const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: MainComponent },
  { path: 'product/new', component: NewComponent },
  { path: 'product/:id', component: ShowComponent },
  { path: 'product/:id/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }