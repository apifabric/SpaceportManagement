import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SpaceAgency-card.component.html',
  styleUrls: ['./SpaceAgency-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SpaceAgency-card]': 'true'
  }
})

export class SpaceAgencyCardComponent {


}