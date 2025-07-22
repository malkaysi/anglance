import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeroCard } from './hero-card/hero-card';
import { GlobalComponent } from '../../component/global/global';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, HeroCard, GlobalComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
