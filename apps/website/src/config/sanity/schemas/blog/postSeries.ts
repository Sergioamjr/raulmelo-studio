import { defineField, defineType } from 'sanity';

export const postSeries = defineType({
  name: 'postSeries',
  title: 'Post Series',
  type: 'document',
  fields: [
    {
      type: 'language',
      name: 'language',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    defineField({
      name: 'posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'post' },
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      posts: 'posts',
    },
    prepare(selection) {
      const { posts, name } = selection;
      const numberOfPosts = posts?.length ?? 0;
      let plural = 'posts';

      if (numberOfPosts === 1) {
        plural = 'post';
      }

      return { title: name, subtitle: `${numberOfPosts} ${plural}` };
    },
  },
});
