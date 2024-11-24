import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AstronautMission-card.component.html',
  styleUrls: ['./AstronautMission-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AstronautMission-card]': 'true'
  }
})

export class AstronautMissionCardComponent {


}