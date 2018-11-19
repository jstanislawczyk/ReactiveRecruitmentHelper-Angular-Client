import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookieBannerDisplayService } from '../services/cookie-banner-service/cookie-banner-display.service';


@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {

  @ViewChild('cookieBanner') cookieBanner;

  cookieBannerDisplay:boolean = true;

  constructor(
    private cookieService:CookieService, 
    private cookieBannerDisplayService:CookieBannerDisplayService
  ) { }

  ngOnInit() {
    this.checkCookieBannerDisplay();
  }

  ngDoCheck() {
    this.checkCookieBannerHeight();
  }
  
  checkCookieBannerDisplay():void {
    if(this.cookieBannerShouldBeHidden()) {
      this.hideCookieBanner();
    }
  }

  checkCookieBannerHeight():void {
    setTimeout(() => {
      this.cookieBannerDisplayService.changeCookieBannerHeightState(this.cookieBanner.nativeElement.offsetHeight);
    })
  }

  cookieBannerShouldBeHidden():boolean {
    return this.cookieService.get('cookie-banner-display') === 'false';
  }

  closeCookieBanner():void {
    this.cookieService.set('cookie-banner-display', 'false', 30);
    this.hideCookieBanner();
  } 

  hideCookieBanner():void {
    this.cookieBannerDisplay = false;
    this.cookieBannerDisplayService.changeCookieBannerDisplayState(false);
  }
}
