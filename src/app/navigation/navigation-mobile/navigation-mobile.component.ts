import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss']
})

export class NavigationMobileComponent implements OnInit {

  @Input() isUserAuthenticated: boolean;
  @Output() onLogout: EventEmitter<any> = new EventEmitter<any>();

  mobileSidebarOpened = false;

  constructor() {
  }

  ngOnInit() {
  }

  logout(): void {
    this.handleMobileSidebarVisibility();
    this.onLogout.emit();
  }

  handleMobileSidebarVisibility(): void {
    this.mobileSidebarOpened = !this.mobileSidebarOpened;
  }
}
