import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient) { }

  getTrendingItems(mediaType:any,page:any):Observable<any>
  {
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/popular?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US&page=${page}`)
  }

  getTrendingDetails(mediaType:any,itemId:any)
  {
    return this.http.get(`https://api.themoviedb.org/3/${mediaType}/${itemId}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
 
  }
}
