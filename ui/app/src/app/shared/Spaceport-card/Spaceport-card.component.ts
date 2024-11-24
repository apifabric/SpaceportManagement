import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Spaceport-card.component.html',
  styleUrls: ['./Spaceport-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Spaceport-card]': 'true'
  }
})

export class SpaceportCardComponent {


}