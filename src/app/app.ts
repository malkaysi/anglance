import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';

interface NavItem {
  label: string;
  route?: string;
  children?: { label: string; route: string }[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatButton, MatMenuModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  navItems: NavItem[] = [
    {
      label: 'Home',
      route: '',
    },
    {
      label: 'Individual',
      children: [
        { label: 'Property', route: '/individuals/products/property' },
        { label: 'Auto', route: '/individuals/products/auto' },
      ],
    },
    {
      label: 'About',
      route: '/about',
    },
    {
      label: 'Privacy',
      route: '/privacy',
    },
    {
      label: 'Conduct',
      route: '/conduct',
    },
  ];
}
