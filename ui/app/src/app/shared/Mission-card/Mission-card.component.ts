import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Mission-card.component.html',
  styleUrls: ['./Mission-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Mission-card]': 'true'
  }
})

export class MissionCardComponent {


}