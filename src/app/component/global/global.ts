import { Component, OnInit } from '@angular/core';
import { directus, Global } from '../../../../directus';
import { readSingleton } from '@directus/sdk';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global',
  imports: [],
  templateUrl: './global.html',
  styleUrl: './global.css',
})
export class GlobalComponent implements OnInit {
  global: Global | undefined;
  async ngOnInit(): Promise<void> {
    await this.getGlobal();
  }

  async getGlobal() {
    this.global = await directus.request<Global>(readSingleton('global'));
    console.log(this.global);
  }
}
