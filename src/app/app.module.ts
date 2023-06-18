import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from "./material/material.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LatestScoresComponent } from './components/latest-scores/latest-scores.component';
import { LatestScoreItemComponent } from './components/latest-scores/latest-score-item/latest-score-item.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { HomeComponent } from './views/home/home.component';
import { TeamsComponent } from './views/teams/teams.component';
import { SearchComponent } from './views/search/search.component';
import { GameScoresComponent } from './views/game-scores/game-scores.component';
import { GameComponent } from './views/game/game.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { HeaderTeamsComponent } from './components/header-teams/header-teams.component';
import { HeaderScoresComponent } from './components/header-scores/header-scores.component';
import { HeaderGameComponent } from './components/header-game/header-game.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllScoresComponent } from './components/all-scores/all-scores.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { AllPlayersItemComponent } from './components/all-players/all-players-item/all-players-item.component';
import { AllTeamsComponent } from './components/all-teams/all-teams.component';
import { AllTeamsItemComponent } from './components/all-teams/all-teams-item/all-teams-item.component';
import { AllStatsComponent } from './components/all-stats/all-stats.component';
import { AllStatsItemComponent } from './components/all-stats/all-stats-item/all-stats-item.component';
import { SearchFiltersComponent } from './views/search/search-filters/search-filters.component';
import { SearchPlayerComponent } from './views/search/search-player/search-player.component';
import { SearchTeamComponent } from './views/search/search-team/search-team.component';
import { SearchGameComponent } from './views/search/search-game/search-game.component';
import { RandomPlayerComponent } from './components/all-players/random-player/random-player.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestScoresComponent,
    LatestScoreItemComponent,
    HomeComponent,
    HeaderHomeComponent,
    TeamsComponent,
    SearchComponent,
    GameScoresComponent,
    GameComponent,
    HeaderSearchComponent,
    HeaderTeamsComponent,
    HeaderScoresComponent,
    HeaderGameComponent,
    FooterComponent,
    AllScoresComponent,
    AllPlayersComponent,
    AllPlayersItemComponent,
    AllTeamsComponent,
    AllTeamsItemComponent,
    AllStatsComponent,
    AllStatsItemComponent,
    SearchFiltersComponent,
    SearchPlayerComponent,
    SearchTeamComponent,
    SearchGameComponent,
    RandomPlayerComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
