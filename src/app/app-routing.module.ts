import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvshowsComponent } from './tvshows/tvshows.component';

const routes: Routes = 
[
   {path:'',redirectTo:'/home',pathMatch:'full'},
   {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
   {path:'about',component:AboutComponent},
   {path:'movies',component:MoviesComponent,canActivate:[AuthGuard]},
   {path:'networks',component:NetworksComponent},
   {path:'people',component:PeopleComponent,canActivate:[AuthGuard]},
   {path:'tvshows',component:TvshowsComponent,canActivate:[AuthGuard]},
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'details/:id',component:DetailsComponent},
   {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
