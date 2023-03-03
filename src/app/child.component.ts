import { Component, SkipSelf, Self, Optional, Host } from '@angular/core';
import { RandomService } from './random-service';

@Component({
  selector: 'my-child',
  providers: [RandomService],
  viewProviders: [],
  template: `
    <div class="box">
      <p>ChildComponent => {{ randomNo }}</p>
      <ng-content> </ng-content>

      <strong>View Child</strong>
      <my-grandChild></my-grandChild>
    </div>
  `,
})
export class ChildComponent {
  randomNo;
  constructor(private randomService: RandomService) {
    this.randomNo = randomService.RandomNo;
  }
}
