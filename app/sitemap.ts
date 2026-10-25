import type { MetadataRoute } from 'next';

const SITE = 'https://assetpropertysolution.net';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/services/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/about/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/contact/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/vendor/`, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
