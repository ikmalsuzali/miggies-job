import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ashikin Azidee — Interior Designer & 3D Visualiser',
    short_name: 'Ashikin Azidee',
    description:
      'Interior designer and 3D visualiser specializing in residential and commercial spaces with a focus on render-to-reality accuracy. Based in Malaysia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#1a1a1a',
  }
}
