import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/data/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      // Expect dd/mm/yyyy HH:mm and parse it into a Date object
      pubDate: z.string().transform((str) => {
        // Split the date and time parts
        const [datePart, timePart] = str.split(' ');

        // Split the date into day, month, and year
        const [day, month, year] = datePart.split('/').map(Number);

        // Default time to midnight if not provided
        const [hours, minutes] = timePart
          ? timePart.split(':').map(Number)
          : [0, 0];

        // Create a Date object
        const parsedDate = new Date(year, month - 1, day, hours, minutes);

        // Check if the parsedDate is invalid
        if (isNaN(parsedDate.getTime())) {
          throw new Error(
            `Invalid date format: ${str}. Expected format is dd/mm/yyyy HH:mm.`
          );
        }

        return parsedDate;
      }),
      imgUrl: image(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
  blog: blogCollection,
};
