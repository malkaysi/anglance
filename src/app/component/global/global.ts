import { Component, inject, signal } from '@angular/core';
import { Global } from '../../../../directus';
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
  globalSignal = signal<Global | undefined>(undefined);

  constructor() {}

  async ngOnInit() {
    try {
      const global = await this.globalService.getGlobal();
      this.globalSignal.set(global);
    } catch (e) {
      console.error('Error loading global singleton', e);
    }
  }
}
