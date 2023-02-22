import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.isOpen = !this.isOpen;
    this.sideNavToggled.emit(this.isOpen);
  }

}
