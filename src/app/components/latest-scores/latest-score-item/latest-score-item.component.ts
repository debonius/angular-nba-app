import { Component, Input, OnInit } from '@angular/core';
import {Game} from "../../../API/Game";

@Component({
  selector: 'app-latest-score-item',
  template: `
    <li class="results__item">
      <div class="game__main-info">
          <div class="game__team">
              <img
                class="game__logo"
                src="../../assets/img/team-logos/{{ score?.home_team?.abbreviation }}.svg"
                [alt]="score?.home_team?.full_name + 'logo'">
              <span class="game__team-name">{{ score?.home_team?.abbreviation }}
              </span>
              <span class="game__score">{{ score?.home_team_score }}</span>
          </div>
          <span class="game__vs">VS</span>
          <div class="game__team">
              <span class="game__score">{{ score?.visitor_team_score }}</span>
              <img
                class="game__logo"
                [src]="'../../assets/img/team-logos/' + score?.visitor_team?.abbreviation + '.svg'"
                [alt]="score?.visitor_team?.full_name + 'logo'">
              <span class="game__team-name">{{ score?.visitor_team?.abbreviation }}</span>
          </div>
      </div>
      <div class="game__minor-info">
          <span class="game__date">{{ score?.date | date: 'mediumDate'}} | </span>
          <span class="game__city">{{ score?.home_team?.city }}</span>
      </div>
    </li>
  `,
  styleUrls: ['./latest-score-item.component.scss']
})
export class LatestScoreItemComponent implements OnInit {

  @Input() score?: Game;

  constructor() { }

  ngOnInit(): void {}

}
