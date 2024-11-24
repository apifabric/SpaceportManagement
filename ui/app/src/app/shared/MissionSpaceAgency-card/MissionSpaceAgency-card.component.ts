import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MissionSpaceAgency-card.component.html',
  styleUrls: ['./MissionSpaceAgency-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MissionSpaceAgency-card]': 'true'
  }
})

export class MissionSpaceAgencyCardComponent {


}