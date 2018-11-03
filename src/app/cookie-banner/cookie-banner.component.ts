import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {

  cookieBannerDisplay:Boolean = true;

  constructor(private cookieService:CookieService) { }

  ngOnInit() {
    this.checkCookieBannerDisplay();
  }

  checkCookieBannerDisplay() {
    if(this.cookieBannerShouldBeHidden()) {
      this.cookieBannerDisplay = false;
    }
  }

  closeCookieBanner() {
    this.cookieService.set('cookie-banner-display', 'false', 30);
    this.cookieBannerDisplay = false;
  } 

  cookieBannerShouldBeHidden() {
    return this.cookieService.get('cookie-banner-display') == 'false';
  }
}
