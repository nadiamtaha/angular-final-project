import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  movieId:any=null;
  movieDetails:any={};
  constructor(private _ActivatedRoute:ActivatedRoute,private _TrendingService:TrendingService) {
    this.movieId=_ActivatedRoute.snapshot.params.id;

   }

   getTrendingDetails(mediaType:any){
     this._TrendingService.getTrendingDetails(mediaType,this.movieId).subscribe((response)=>{

      console.log(response)
      this.movieDetails=response
     })
  }

  ngOnInit(): void {
    this.getTrendingDetails('movie')
  }

}
