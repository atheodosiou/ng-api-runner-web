import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunOneComponent } from './run-one.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component:RunOneComponent
    }])
  ],
  exports:[RunOneComponent],
  declarations: [RunOneComponent]
})
export class RunOneModule { }
