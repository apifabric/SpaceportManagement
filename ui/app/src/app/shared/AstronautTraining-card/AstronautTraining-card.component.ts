import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AstronautTraining-card.component.html',
  styleUrls: ['./AstronautTraining-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AstronautTraining-card]': 'true'
  }
})

export class AstronautTrainingCardComponent {


}