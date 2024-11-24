import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Spacecraft-card.component.html',
  styleUrls: ['./Spacecraft-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Spacecraft-card]': 'true'
  }
})

export class SpacecraftCardComponent {


}