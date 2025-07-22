import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeroCard } from './hero-card/hero-card';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, HeroCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
