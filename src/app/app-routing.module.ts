import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoggyBreedListComponent } from './doggy-breed-list/doggy-breed-list.component';

const routes: Routes = [
  { path: 'doggyBreedList', component: DoggyBreedListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
