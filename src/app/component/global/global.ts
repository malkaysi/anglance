import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { directus, Global } from '../../../../directus';
import { readSingleton } from '@directus/sdk';
import { CommonModule } from '@angular/common';
import { GlobalService } from './service/global';

@Component({
  selector: 'app-global',
  imports: [],
  templateUrl: './global.html',
  styleUrl: './global.css',
})
export class GlobalComponent {
  global: Global | undefined;
  globalService: GlobalService = inject(GlobalService);

  constructor(private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    try {
      const global = await this.globalService.getGlobal();
      this.global = global;
      this.cdr.detectChanges();
    } catch (e) {
      console.error('Error loading global singleton', e);
    }
  }
}
