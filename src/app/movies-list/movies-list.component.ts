import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../entities/Movies';
import { MoviesService } from '../service/moviesservice';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

 
  public isVisible:boolean =false;
  public myMovies:Movies[]=[];
  public neno:any={};

  public movieSearchCriteria:any={};


  constructor(private moviesService: MoviesService, private router: Router){
    
  }

  ngOnInit(){
    this.GetAllMoviesIntoHere();
  }

  public toggleVisible(){
    this.isVisible=!this.isVisible;
    this.GetAllMoviesIntoHere();
  }

  public openAComponentToAddNewMovie(){
    //add code to go to the new component that adds a new movie
    this.router.navigateByUrl('/addmovie');
  }

  public GetAllMoviesIntoHere(){

    this.moviesService.GetAllMovies().then(data => {
      this.myMovies=data;
      console.log("Movies",data);
    }, error=>{
      console.log("Error: ", error);
    });

  }

  public movieToDelete(movieToDelete: Movies){

    this.moviesService.DeleteMovie(movieToDelete.id).then(jibu=>{
      if(jibu==true){
        alert('Movie Deleted');
        this.GetAllMoviesIntoHere();
      }
      else{
        alert('Movie NOT Deleted');
      }
    },  error=>{
     // alert('error:'+JSON.stringify(error));
    });

  }

  public SearchMovies(){
    //alert(JSON.stringify(this.movieSearchCriteria));
    this.moviesService.SearchMovies(this.movieSearchCriteria).then(data=>{
      this.myMovies=data;
    }, error => {
      this.myMovies=[];
      alert('error searching movies');
    });
   
  }

  editMovie(movieToEdit : Movies){
    this.router.navigateByUrl('/addmovie?id='+movieToEdit.id);
  }
 /* 
  public nestedSearch (){
    this.moviesService.SearchMovies(this.movieSearchCriteria).then(data=>{
      this.myMovies=data;
      this.movieSearchCriteria = '';
      
      this.myMovies.filter(e => {
        return e.title === this.movieSearchCriteria.title|| 
                e.genres === this.movieSearchCriteria.genres
      });
    }, error => {
      this.myMovies=[];
      this.GetAllMoviesIntoHere();
      alert('error searching movies');
    });

  }*/

}

