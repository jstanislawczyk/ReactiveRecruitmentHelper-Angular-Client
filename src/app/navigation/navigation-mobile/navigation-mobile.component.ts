import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss']
})

export class NavigationMobileComponent implements OnInit {

  @Input() isUserAuthenticated:boolean;

  mobileSidebarOpened:boolean = false;

  constructor() { }

  ngOnInit() { }

  handleMobileSidebarVisibility() {
    this.mobileSidebarOpened = !this.mobileSidebarOpened;
  }
}
