import {EventEmitter, Injectable} from '@angular/core';

@Injectable()

export class NavbarService {
  navbarToggle = new EventEmitter<boolean>();

  constructor() { }

  hide()
  {
    this.navbarToggle.emit(false);
  }

  show()
  {
    this.navbarToggle.emit(true);
  }


}
