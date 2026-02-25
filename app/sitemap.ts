import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://heyhaqi.my.id',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ];
}