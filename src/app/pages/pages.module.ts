import { NgModule } from '@angular/core';
import { AddEndpointModule } from './add-endpoint/add-endpoint.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HomeModule } from './home/home.module';

@NgModule({
    imports:[AddEndpointModule,PageNotFoundModule,HomeModule],
    exports:[AddEndpointModule,PageNotFoundModule,HomeModule]
})
export class PagesModule{}