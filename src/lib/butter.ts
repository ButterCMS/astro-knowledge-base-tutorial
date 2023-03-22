// ./src/lib/buttercms.js

import Butter from "buttercms";

export const butterClient = Butter(import.meta.env.BUTTER_TOKEN);

export interface kb_article {
  slug: string;
  name: string;
  published: Date;
  updated: Date;
  page_type: string;
  fields: {
    title: string;
    description: string;
    content: string;
  };
}

export interface kb_category {
  meta: object;
  name: string;
  description: string;
  slug: string;
}

export interface kb_featured_categories {
  type: "kb_featured_categories";
  fields: {
    caption: string;
    categories: [kb_category];
  };
}

export interface kb_featured_articles {
  type: "kb_featured_articles";
  fields: {
    caption: object;
    articles: [kb_article];
  };
}

export interface kb_faqs {
  type: "kb_faqs";
  fields: {
    caption: object;
    faqs: [
      {
        question: string;
        answer: string;
        category: [string];
      }
    ];
  };
}

export interface kb_landing_hero {
  caption: string;
  text: string;
  search_field_placeholder?: string;
}

export interface kb_landing_page_fields {
  seo: {
    title: string;
    description: string;
  };
  kb_landing_hero: kb_landing_hero;
  sections: [kb_featured_articles | kb_featured_categories | kb_faqs];
}
