import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule } from './material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { FeatherModule } from 'angular-feather';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    NgbDropdownModule,
    NgbModule,
    NgbNavModule,

  ],
  imports: [
    CommonModule,
    // FeatherModule,
    // FeatherModule.pick(Icons),
    NgbDropdownModule,
    NgbModule,
    NgbNavModule,
    SharedRoutingModule,
  ],
  providers: [],
})
export class SharedModule {}
