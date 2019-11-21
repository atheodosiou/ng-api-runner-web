import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }
  @Output() onSidebarToggle:EventEmitter<any>=new EventEmitter<any>();
  ngOnInit() {
  }

  onToggle(){
    this.onSidebarToggle.emit();
  }
}
