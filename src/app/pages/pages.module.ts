import { NgModule } from '@angular/core';
import { AddEndpointModule } from './add-endpoint/add-endpoint.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HomeModule } from './home/home.module';
import { RunOneModule } from './run-one/run-one.module';

@NgModule({
    imports:[AddEndpointModule,PageNotFoundModule,HomeModule,RunOneModule],
    exports:[AddEndpointModule,PageNotFoundModule,HomeModule,RunOneModule]
})
export class PagesModule{}