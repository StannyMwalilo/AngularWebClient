import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { textChangeRangeIsUnchanged } from 'typescript';
import { MoviesService } from '../service/moviesservice';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  
  public movieToAdd:any={};
  public  movieId: number=0;
  public isEditingMovie: boolean=false;
  
  constructor(private moviesService: MoviesService, private router: Router, private activatedRoute: ActivatedRoute){
   
  }
  

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params=>{
        this.movieId=params['id'];
        if(this.movieId){
          this.isEditingMovie=true;
          this.ReaMovieFromDatabase();
        }
        else{
          this.isEditingMovie=false;
        }
       
    });
  }

   
  public AddNewMovie(){
    this.moviesService.AddMovieToDatabase(this.movieToAdd).then(
      data=>{
        alert('A new movies has been added');
        this.movieToAdd={};
        this.router.navigateByUrl('/');
      },
      error=>{
        alert('Could not add movie');
      }
    );
  }

  public ReaMovieFromDatabase(){

    this.moviesService.GetMovieById(this.movieId).then(data=>{
      this.movieToAdd=data;
    }, error=>{
      alert('Could not load movie by given ID');
    });

  }
  
  public UpdateMovie(){
    this.moviesService.UpdateMovie(this.movieToAdd).then(data=>{
      alert('Updated movies');
        this.movieToAdd={};
        this.router.navigateByUrl('/');
    }, error=>{
      alert('Could not update movie ');
    });

  }

}
