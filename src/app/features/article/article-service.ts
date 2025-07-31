import { Injectable } from '@angular/core';
import { Article, directus } from '../../../../directus';
import { readItems, withOptions } from '@directus/sdk';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  async getAllArticles() {
    const articles = await directus.request(
      readItems('articles', {
        fields: ['*', 'translations.*'],
      })
    );
    console.log(articles);
    return articles;
  }

  async getEnglishUSArticles() {
    const articles = await directus.request(
      readItems('articles', {
        fields: ['*', 'translations.*'],
        deep: {
          translations: {
            _filter: {
              languages_code: { _eq: 'en-US' },
            },
          },
        },
      })
    );
    console.log(articles);
    return articles;
  }
}
