import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { directus, Page } from '../../../../directus';
import { readItems } from '@directus/sdk';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class PageComponent {
  // page: Page | undefined;
  slugSignal = signal('');
  pageSignal = signal<Page | undefined>(undefined);
  private route = inject(ActivatedRoute);

  /* constructor() {
    // this.slug = this.route.snapshot.paramMap.get('slug');

    this.activatedRoute.params.subscribe((params) => {
      this.slug.set(params['slug']);
    });

    if (this.slug()) {
      this.getPageBySlug(this.slug());
    }
  } */

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const slug = params['slug'] as string;
      this.slugSignal.set(slug);

      if (slug) {
        await this.getPageBySlug(slug);
      }
    });
  }

  async getPageBySlug(slug: string) {
    const pages = await directus.request<Page[]>(
      readItems('pages', {
        filter: { slug: { _eq: slug } },
        limit: 1,
      })
    );

    console.log(pages);

    this.pageSignal.set(pages[0] ?? undefined);
  }
}
