import { Component, VERSION } from '@angular/core';
import { RandomService } from './random-service';

@Component({
  selector: 'my-app',
  providers: [],
  viewProviders: [],
  template: `
    <div class="box">
      <p>AppComponent => {{ randomNo }}</p>
      <my-child>
        <strong>Projected Content</strong>
        <my-grandChild></my-grandChild>
      </my-child>
    </div>

    <br /><br /><br />
    Read More
    <a href="https://www.tektutorialshub.com/angular/viewproviders-in-angular/"
      >View Providers in Angular</a
    >
  `,
})
export class AppComponent {
  randomNo;
  constructor(private randomService: RandomService) {
    this.randomNo = randomService.RandomNo;
  }
}
