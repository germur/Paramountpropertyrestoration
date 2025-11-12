import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        featured: z.boolean().default(false),
        // SEO fields
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
        keywords: z.array(z.string()).optional(),
        ogImage: z.string().optional(),
        canonicalUrl: z.string().optional(),
        // Article schema fields
        category: z.string().default("Home Improvement"),
        readTime: z.number().optional(),
        lastModified: z.date().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
