import { Component, OnInit } from '@angular/core';

import { NavbarService } from "../services/navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  navbarFlag:boolean = true;

  navLinks =
  [
    {label: 'Contacts', path: '/contacts'},
    {label: 'Search', path: '/search'}
  ];

  constructor
  (
    private navbarService: NavbarService
  ) { }

  ngOnInit()
  {
    this.navbarService.navbarToggle.subscribe
    (
      (flag:boolean) =>
      {
        this.navbarFlag = flag;
      }
    )
  }

}
