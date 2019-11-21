import { NgModule } from "@angular/core";
import { NavBarModule } from './components/nav-bar/nav-bar.module';

@NgModule({
    imports:[NavBarModule],
    exports:[NavBarModule]
})
export class SharedModule {}