import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';

@Component({
  selector: 'app-search-player',
  template: `
    <div class="search">
      <div class="d-flex">
        <mat-form-field style="margin-left: 15px;">
          <mat-label for="name">Player name</mat-label>
          <input
            matInput id="name" placeholder="First or last name"
            [(ngModel)]="playerName"
            (input)="emptyNotFoundMsg()"
          >
        </mat-form-field>
        <mat-form-field style="margin-left: 15px;">
          <mat-label for="team">Team name</mat-label>
          <input
            matInput id="team" placeholder="Team name"
            [(ngModel)]="teamName"
            (input)="emptyNotFoundMsg()"
          >
        </mat-form-field>
      </div>
      <button mat-stroked-button class="btn-reset" color="basic" (click)="resetFilters()">Reset</button>
      <button (click)="passQuery(playerName)" [style.margin-left.px]="10" mat-flat-button color="primary">Search</button>
      
      <p *ngIf="notFoundMsg !== '' && playerName !== '' ">{{ notFoundMsg }}</p>

      <!-- add condition *ngIf="results !== null && results.length > 0" -->
      <app-pagination [page]="page" (changePageEvent)="changePage($event)"></app-pagination>

      <mat-card 
        class="mat-card mat-focus-indicator card--rounded search-results"
        *ngIf="results !== null && results.length > 0"
      >
        <mat-card-content class="mat-card-content results">
          <ul class="results__list">
            <li class="player results__item" *ngFor="let result of results">
              {{ result.first_name }}
              {{ result.last_name }},
              {{ result.team.full_name }}
              ({{ result.team.abbreviation }})
              <img
                class="player__club-logo"
                [src]="'../../assets/img/team-logos/' + result.team.abbreviation + '.svg'"
                [alt]="result.team.full_name + 'logo'"
              >
            </li>
          </ul>
        </mat-card-content>
      </mat-card>
    </div>
    `
})

export class SearchPlayerComponent implements OnInit {
  filters: any = [];
  playerName: string = '';
  teamName: string = '';
  results: any | undefined = null;
  notFoundMsg: string = '';
  page: number = 1;
  
  constructor(private _api: ApiService) {}
  ngOnInit() {}

  passQuery (name: string) {
    if (this.playerName !== '' || this.teamName !== '') {
      if (this.playerName !== '' && this.teamName === '') {
        this._api.getPlayers(name, 100, this.page)
        .subscribe(
          (response) => {
            console.log('this.page', this.page);
            if (response.data.length > 0) {
              this.results = response.data;
            } else {
              console.log('not found')
              this.notFoundMsg = 'No players found... Try another name';
              this.results = null;
            }
          }
        );
      } 
      else if (this.playerName === '' && this.teamName !== '') {
        this._api.getPlayers(name, 100, this.page)
        .subscribe(
          (response) => {
            console.log('this.page', this.page);
            if (response.data.length > 0) {
              this.results = response.data.filter( 
                p => p.team.full_name.toLowerCase().includes( this.teamName.toLowerCase() )
                );
              console.log(this.results);
            } else {
              console.log('not found')
              this.notFoundMsg = 'No players found... Try another name';
              this.results = null;
            }
          }
        );
      } 
      else {
        this._api.getPlayers(name, 100, this.page)
        .subscribe(
          (response) => {
            console.log('this.page', this.page);
            if (response.data.length > 0) {
              this.results = response.data.filter( 
                p => p.team.full_name.toLowerCase().includes( this.teamName.toLowerCase() )
                );
              console.log(this.results);
            } else {
              console.log('not found')
              this.notFoundMsg = 'No players found... Try another name';
              this.results = null;
            }
          }
        );
      }
    }
  }

  emptyNotFoundMsg() {
    this.notFoundMsg = '';
  }
  
  resetFilters() {
    this.playerName = '';
    this.results = null;
  }

  changePage(page: number) {
    console.log('called changePage()')
    console.log('page', page)
    this.passQuery(this.playerName);
  }

}



