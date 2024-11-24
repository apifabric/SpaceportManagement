import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Astronaut-card.component.html',
  styleUrls: ['./Astronaut-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Astronaut-card]': 'true'
  }
})

export class AstronautCardComponent {


}