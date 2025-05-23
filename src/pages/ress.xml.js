import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('blog');

    // Ordenar posts por fecha (más recientes primero)
    const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

    return rss({
        title: 'Mi Sitio Web - Blog',
        description: 'Contenido valioso sobre desarrollo web, marketing digital y tecnología para hacer crecer tu negocio.',
        site: context.site,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            author: post.data.author,
            link: `/blog/${post.slug}/`,
            categories: post.data.tags,
        })),
        customData: `<language>es-es</language>`,
    });
}