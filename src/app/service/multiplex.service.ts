import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class MultiplexService{

    //private baseUrl = 'http://localhost:8558/multiplex-api-management/api/multiplex';
    private baseUrl = 'http://localhost:6063/api/multiplex';

    constructor(private http: HttpClient) { }

    createMultiplex(multiplex: Object): Observable<Object> {
        return this.http.post(this.baseUrl+'/register', multiplex);
      }

      getMultiplexList(): Observable<any>{
        return this.http.get(this.baseUrl+'/findAllMultiplex');
      }

      deleteMultiplex(id: string): Observable<any> {
        console.log('delete id '+ id);
        return this.http.delete(this.baseUrl+'/deleteById'+id, { responseType: 'text' });
      }
    
      getMultiplex(id: string): Observable<any> {
        return this.http.get(this.baseUrl+'/findById'+id);
      }
    
      updateMultiplex(id: string, value: any): Observable<Object> {
        console.log('id :'+id + ' and value :' + value );
        return this.http.put(this.baseUrl+'/updateMultiplex'+id, value);
      }
}