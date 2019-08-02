import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.less']
})
export class NotFoundPageComponent {
  constructor(private router: Router) {
  }
  onBackHome() {
      this.router.navigate(['/']);
  }
}
