import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss']
})
export class NavigationMobileComponent implements OnInit {

  mobileSidebarOpened:Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleMobileSidebarVisibility() {
    this.mobileSidebarOpened = !this.mobileSidebarOpened;
  }
}
