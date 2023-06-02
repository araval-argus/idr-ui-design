import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tail-project';
  isCollapsed: boolean;
  isChangeProfileSelected: boolean;
  menu: Array<any> = [
    {
      sectionName: 'Investor',
      menuItems: [
        {
          iconName: 'investor-dashboard',
          title: 'Investor',
          link: 'dashboard/investor'
        },
        {
          iconName: 'profile-settings',
          title: 'KYC Profile Settings',
          link: ''
        },
        {
          iconName: 'funds',
          title: 'My Funds',
          link: ''
        },
        {
          iconName: 'bell',
          title: "Notifications",
          link: ''
        }
      ],
    },
    {
      sectionName: 'Partner',
      menuItems: [
        {
          iconName: 'bar-chart',
          title: 'All Funds',
          link:''
        },
        {
          iconName: 'subscription-dashboard',
          title: 'Subscription Dashboard',
          link:''
        },
        {
          iconName: 'kyc-dashboard',
          title: 'KYC Dashboard',
          link:''
        },
        {
          iconName: 'tax-dashboard',
          title: 'Tax Dashboard',
          link: ''
        },
      ],
    }
  ];
  constructor() {
    this.isCollapsed = false;
    this.isChangeProfileSelected = false;
  }

  public toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
  public setIsSelected(value: boolean){
    this.isChangeProfileSelected = value;
  }
}
