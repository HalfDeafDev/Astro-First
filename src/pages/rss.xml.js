import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: 'Learning Astro | Blog',
        description: 'A personal and business journey',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`
    })
}