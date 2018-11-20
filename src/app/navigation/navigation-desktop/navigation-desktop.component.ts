import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-desktop',
  templateUrl: './navigation-desktop.component.html',
  styleUrls: ['./navigation-desktop.component.scss']
})

export class NavigationDesktopComponent implements OnInit {

  @Input() isUserAuthenticated: boolean;
  @Input() isAdmin: boolean;
  @Input() isRecruiter: boolean;

  @Output() onLogout: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  logout(): void {
    this.onLogout.emit();
  }
}
