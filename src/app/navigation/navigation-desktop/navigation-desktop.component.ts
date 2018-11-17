import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-desktop',
  templateUrl: './navigation-desktop.component.html',
  styleUrls: ['./navigation-desktop.component.scss']
})

export class NavigationDesktopComponent implements OnInit {

  @Input() isUserAuthenticated:boolean;

  constructor() { }

  ngOnInit() { }
}