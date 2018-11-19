import { Component, OnInit } from '@angular/core';
import { CookieBannerDisplayService } from '../services/cookie-banner-service/cookie-banner-display.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  cookieBannerDisplay: Boolean;
  cookieBannerHeight: Number;

  constructor(private cookieBannerDisplayService: CookieBannerDisplayService) { }

  ngOnInit() {
    this.cookieBannerDisplayService.currentCookieBannerDisplayState
      .subscribe(displayState => this.cookieBannerDisplay = displayState);

    this.cookieBannerDisplayService.currentCookieBannerHeight
      .subscribe(height => this.cookieBannerHeight = height);
  }
}
