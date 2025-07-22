import { Injectable } from '@angular/core';
import { directus, Global } from '../../../../../directus';
import { readSingleton } from '@directus/sdk';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  async getGlobal() {
    const global = await directus.request<Global>(readSingleton('global'));
    console.log(global);
    return global;
  }
}
