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
    }),
});

export const collections = {
    blog: blogCollection,
};
