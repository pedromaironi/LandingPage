import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CmsRoutingModule } from './cms-routing.module';
import { LandingPageComponent } from './components/landing-page/landing.page.component';
import { NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    // ScrollToModule
  ],
  exports: [],
  providers: [],
})
export class CmsModule {}
