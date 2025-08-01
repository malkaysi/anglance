import { Injectable } from '@angular/core';
import { Article, directus } from '../../../../directus';
import { readItems, withOptions } from '@directus/sdk';

export type LocalizedArticles = {
  id: string;
  title: string;
  content: string;
};
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  async getAllArticles() {
    const articles = await directus.request(
      readItems('articles', {
        fields: ['*', { translations: ['*'] }],
      })
    );
    return articles;
  }

  async getEnglishUSArticles() {
    const articles = await directus.request(
      readItems('articles', {
        fields: ['*', { translations: ['*'] }],
        deep: {
          translations: {
            _filter: {
              languages_code: { _eq: 'en-US' },
            },
          },
        },
      })
    );
    return articles;
  }

  async getGermanArticles() {
    const articles = await directus.request(
      readItems('articles', {
        fields: ['*', { translations: ['*'] }],
        deep: {
          translations: {
            _filter: {
              languages_code: { _eq: 'de-DE' },
            },
          },
        },
      })
    );

    console.log(articles[0].translations);
    return articles;
  }
}
