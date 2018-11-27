import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieBannerDisplayService {

  private cookieBannerDisplayState = new BehaviorSubject<Boolean>(true);
  currentCookieBannerDisplayState = this.cookieBannerDisplayState.asObservable();

  private cookieBannerHeight = new BehaviorSubject<Number>(0);
  currentCookieBannerHeight = this.cookieBannerHeight.asObservable();

  constructor() { }

  changeCookieBannerDisplayState(state: Boolean): void {
    this.cookieBannerDisplayState.next(state);
  }

  changeCookieBannerHeightState(state: Number): void {
    this.cookieBannerHeight.next(state);
  }
}
