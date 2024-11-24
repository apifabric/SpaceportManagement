import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Cargo-card.component.html',
  styleUrls: ['./Cargo-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Cargo-card]': 'true'
  }
})

export class CargoCardComponent {


}