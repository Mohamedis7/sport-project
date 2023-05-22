import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { AddStoresComponent } from './components/add-stores/add-stores.component';
import { EditStadiumComponent } from './components/edit-stadium/edit-stadium.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';



const routes: Routes = [
   //http://localhost:4200/ => Home component will be displayed
   {path:"",component:HomeComponent},
  
    //http://localhost:4200/signin => login component will be displayed
   {path:"signin",component:LoginComponent},
    //http://localhost:4200/signup => signup component will be displayed
  {path:"signup",component:SignupComponent},

  {path:"addMatch",component:AddMatchComponent},

  {path:"addTeam",component:AddTeamComponent},
  {path:"admin",component:AdminComponent},
  {path:"addPlayer",component:AddPlayerComponent},
  {path:"matches",component:MatchesComponent},
  {path:"players",component:PlayersComponent},
  {path:"matchInfo",component:MatchInfoComponent},
  {path:"editMatch/:x",component:EditMatchComponent},
  {path:"teamInfo/:id",component:TeamInfoComponent},
  {path:"editTeam/:x",component:EditTeamComponent},
  {path:"signupAdmin",component:SignupAdminComponent},
  {path:"searchMatches",component:SearchComponent},
  {path:"addStadium",component:AddStadiumComponent},
  {path:"addStore",component:AddStoresComponent},
  {path:"editStadium/:x",component:EditStadiumComponent},
  {path:"editStore/:x",component:EditStoreComponent},
  {path:"searchTeams",component:SearchTeamComponent},
  {path:"teams",component:TeamsComponent},
  {path:"profile/:id",component:ProfileComponent},
  {path:"weather",component:WeatherComponent},
  {path:"reclamation",component:ReclamationComponent},


  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
