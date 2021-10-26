import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private _TrendingService:TrendingService,private spinner: NgxSpinnerService) { }
  trendingMovies:any[]=[];
  getTrendingMovies(page:number){
    this.spinner.show();
        this._TrendingService.getTrendingItems('movie',page).subscribe((response)=>{
          this.trendingMovies=response.results;
          console.log(this.trendingMovies);
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
          }, 3000);

        })
  }

  ngOnInit(): void {
    this.getTrendingMovies(1);
  }

}
