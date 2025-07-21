import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  children?: { label: string; route: string }[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  navItems: NavItem[] = [
    {
      label: 'Home',
      route: '',
    },
  ];
}
