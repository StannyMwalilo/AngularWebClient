import { Component } from '@angular/core';
import { Movies } from './entities/Movies';
import { MoviesService } from './service/moviesservice';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWebClient';
  showFiller = false;

  
  

}
