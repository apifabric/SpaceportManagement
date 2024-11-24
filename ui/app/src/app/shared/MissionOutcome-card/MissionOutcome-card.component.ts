import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MissionOutcome-card.component.html',
  styleUrls: ['./MissionOutcome-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MissionOutcome-card]': 'true'
  }
})

export class MissionOutcomeCardComponent {


}