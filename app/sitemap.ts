import type { MetadataRoute } from 'next';

const SITE = 'https://assetpropertysolution.net';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/projects/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/projects/craftsman-hold/`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE}/projects/northridge-turn/`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE}/projects/vermont-corridor/`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE}/projects/golden-hill-duplex/`, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE}/services/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE}/about/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/vendor/`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE}/apply/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE}/contact/`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
