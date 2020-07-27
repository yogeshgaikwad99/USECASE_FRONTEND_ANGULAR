import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //private baseUrl = 'http://localhost:8558/movie-api-management/api/movies';
  private baseUrl = 'http://localhost:6062/api/movies';

  constructor(private http: HttpClient) { }


  createMovie(movies: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'/addMovie', movies);
  }

  getMoviesList(): Observable<any> {
    
    return this.http.get(this.baseUrl+'/findAllMovies');
    
  }

  deleteMovie(id: string): Observable<any> {
    //console.log(this.baseUrl+'/'+id);
    return this.http.delete(this.baseUrl+'/delete/'+id, { responseType: 'text' });
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(this.baseUrl+'/findById'+id);
  }

  updateMovie(id: string, value: any): Observable<Object> {
    return this.http.put(this.baseUrl+'/updateMovieDetail'+id, value);
  }

  
}