import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEndpointComponent } from './add-endpoint.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddEndpointComponent,
      },
    ])
  ],
  exports:[AddEndpointComponent],
  declarations: [AddEndpointComponent]
})
export class AddEndpointModule { }
