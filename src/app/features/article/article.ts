import { Component, inject, signal } from '@angular/core';
import { ArticleService } from './article-service';
import { Article } from '../../../../directus';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class ArticleComponent {
  articlesSignal = signal<Article[] | undefined>(undefined);
  articlesService: ArticleService = inject(ArticleService);

  async ngOnInit() {
    try {
      const usArticles = await this.articlesService.getEnglishUSArticles();
      this.articlesSignal.set(usArticles);
      const allArticles = await this.articlesService.getAllArticles();
    } catch (e) {
      console.log(e);
    }
  }
}
