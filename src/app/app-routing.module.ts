import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {path: 'addmovie', component: AddMovieComponent},
  {path: '', component: MoviesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
 
 }
