import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Movies } from '../entities/Movies';

@Injectable() 
export class MoviesService{

    constructor(private httpClient:HttpClient){

    }

    public GetAllMovies():Promise<[Movies]>{

         return this.httpClient.get<Movies>('http://localhost:7070/Movies').toPromise().then(data=>{
            return data;
        }, error=>{
            return error;           
        });
    }

    public GetMovieById(idYaMovie: number):Promise<Movies>{

        return this.httpClient.get<Movies>('http://localhost:7070/Movies/'+idYaMovie).toPromise().then(data=>{
           return data;
       }, error=>{
           return error;           
       });
   }

   public UpdateMovie(movie: Movies):Promise<Movies>{

    return this.httpClient.put<Movies>('http://localhost:7070/Movies/'+movie.id,movie).toPromise().then(data=>{
       return data;
   }, error=>{
       return error;           
   });
}

    public SearchMovies(searchCriteria: any):Promise<[Movies]>{

       // let myParams = new HttpParams().set('criteria', searchCriteria);
        
        console.log(JSON.stringify(searchCriteria));
            return this.httpClient.post<Movies>('http://localhost:7070/moviessearch',searchCriteria).toPromise().then(data=>{
            return data;
        }, error=>{
            return error;           
        });
       
   }

   public AddMovieToDatabase(movieMpya: any):Promise<Movies>{
     return this.httpClient.post<Movies>('http://localhost:7070/Movies',movieMpya).toPromise().then(data=>{
        return data;
    }, error=>{
        return error;           
    });   
}
    
    public DeleteMovie(movieId: number){

        //http://localhost:7070/Movies/5
        return this.httpClient.delete<boolean>('http://localhost:7070/Movies/'+movieId).toPromise().then(data=>{
            return data;
        }, error=>{
            return error;           
        });
    }
}