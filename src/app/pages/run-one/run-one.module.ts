import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunOneComponent } from './run-one.component';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: RunOneComponent
    }]),
    TabsModule
  ],
  exports: [RunOneComponent],
  declarations: [RunOneComponent]
})
export class RunOneModule { }
