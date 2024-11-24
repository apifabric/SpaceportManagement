import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AstronautSkill-card.component.html',
  styleUrls: ['./AstronautSkill-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AstronautSkill-card]': 'true'
  }
})

export class AstronautSkillCardComponent {


}