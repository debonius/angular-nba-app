import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GamesResponse} from './games-response';
import {TeamsResponse} from './teams-response';
import {PlayersResponse} from './players-response';
import {StatsResponse} from './stats-response';
import {map, shareReplay, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  KEY = 'befd1205e9mshc5b6271d340e520p18212ajsn969c844a4f9c';

  constructor(private httpClient: HttpClient) {
  }

  getGames(season: string, perPage: number = 100) {
    let query: string | null = season !== '' ? '&seasons[]=' + season : '';
    perPage = perPage ?? 100;
    return this.httpClient.get<GamesResponse>(`https://free-nba.p.rapidapi.com/games?page=1&per_page=${perPage}${query}`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    })
  }

  getLatestGames$(perPage: number, page: number = 1) {
    return this.httpClient.get<GamesResponse>(`https://free-nba.p.rapidapi.com/games?per_page=${perPage}`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    }).pipe(
      switchMap(
        (value) => {
          page = value.meta.total_pages - (page);
          return this.httpClient.get<GamesResponse>(`https://free-nba.p.rapidapi.com/games?per_page=${perPage}&page=${page}`, {
            headers: {
              'X-RapidAPI-Key': this.KEY
            }
          });
        }
      ),
      map(value => {
        return {
          ...value,
          data: value.data.sort((firstGame, secondGame) => {
            return new Date(secondGame.date).getTime() - new Date(firstGame.date).getTime();
          })
        }
      }),
      shareReplay(),
    );
  }

  getLastGame$() {
    return this.httpClient.get<GamesResponse>('https://free-nba.p.rapidapi.com/games?seasons[]=2021&per_page=1', {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    }).pipe(
      switchMap(
        value => {
          return this.httpClient.get<GamesResponse>(`https://free-nba.p.rapidapi.com/games?seasons[]=2021&per_page=1&page=${value.meta.total_pages}`, {
            headers: {
              'X-RapidAPI-Key': this.KEY
            }
          });
        }
      ),
      map(value => {
        return {
          ...value,
          data: value.data.sort((firstGame, secondGame) => {
            return new Date(secondGame.date).getTime() - new Date(firstGame.date).getTime();
          })
        }
      }),
      shareReplay(),
    );
  }

  getTeams() {
    return this.httpClient.get<TeamsResponse>('https://free-nba.p.rapidapi.com/teams', {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    })
  }

  getPlayers(name: string, perPage: number = 100, getPage: number = 1) {
    let query: string | undefined;
    let limit: string = perPage ? 'per_page=' + perPage : 'per_page=' + 100;
    let page: number = getPage;
    query = limit + '&search=' + name;
    return this.httpClient.get<PlayersResponse>(`https://free-nba.p.rapidapi.com/players?page=${page}&${query}`, {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    }) 
  }

  getStats() {
    return this.httpClient.get<StatsResponse>('https://free-nba.p.rapidapi.com/stats', {
      headers: {
        'X-RapidAPI-Key': this.KEY
      }
    })
  }

}
