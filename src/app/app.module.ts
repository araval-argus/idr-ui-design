import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    FormsModule,
    MatDividerModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconsRegistery: MatIconRegistry, sanitizer: DomSanitizer) {
    iconsRegistery.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/search.svg'));
    iconsRegistery.addSvgIcon('bell', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/bell.svg'));
    iconsRegistery.addSvgIcon('printer', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/printer.svg'));
    iconsRegistery.addSvgIcon('chevron-down', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/chevron-down.svg'));
    iconsRegistery.addSvgIcon('chevron-left', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/chevron-left.svg'));
    iconsRegistery.addSvgIcon('profile', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/profile.svg'));
    iconsRegistery.addSvgIcon('investor-dashboard', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/investor-dashboard.svg'));
    iconsRegistery.addSvgIcon('kyc-dashboard', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/kyc-dashboard.svg'));
    iconsRegistery.addSvgIcon('right-arrow', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/right-arrow.svg'));
    iconsRegistery.addSvgIcon('subscription-dashboard', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/subscription-dashboard.svg'));
    iconsRegistery.addSvgIcon('tax-dashboard', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/tax-dashboard.svg'));
    iconsRegistery.addSvgIcon('profile-settings', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/profile-settings.svg'));
    iconsRegistery.addSvgIcon('funds', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/funds.svg'));
    iconsRegistery.addSvgIcon('bar-chart', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/bar-chart.svg'));
    iconsRegistery.addSvgIcon('collapse-arrows', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/collapse-arrows.svg'));
    iconsRegistery.addSvgIcon('expand-arrows', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/expand-arrows.svg'));
    iconsRegistery.addSvgIcon('attachment', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/attachment.svg'));
    iconsRegistery.addSvgIcon('close', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/close.svg'));
    iconsRegistery.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/delete.svg'));
    iconsRegistery.addSvgIcon('download', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/download.svg'));
    iconsRegistery.addSvgIcon('settings-outline', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/settings-outline.svg'));
    iconsRegistery.addSvgIcon('settings-solid', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/settings-solid.svg'));
    iconsRegistery.addSvgIcon('hide-password', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/hide-password.svg'));
    iconsRegistery.addSvgIcon('show-password', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/show-password.svg'));
    iconsRegistery.addSvgIcon('arrow-left', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/arrow-left.svg'));
  }
}
