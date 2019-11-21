import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { FormsModule } from '@angular/forms';
import { StickyHeaderModule, NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { IconsModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StickyHeaderModule,
    NavbarModule,
    IconsModule,
    RouterModule,
    WavesModule, 
    ButtonsModule
  ],
  exports:[NavBarComponent],
  declarations: [NavBarComponent]
})
export class NavBarModule { }
