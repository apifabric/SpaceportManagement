import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './LaunchFacility-card.component.html',
  styleUrls: ['./LaunchFacility-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.LaunchFacility-card]': 'true'
  }
})

export class LaunchFacilityCardComponent {


}