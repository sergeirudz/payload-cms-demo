import type { Block } from 'payload/types';

export const Slider: Block = {
  slug: 'slider',
  fields: [
    {
      name: 'slides',
      label: 'Slides',
      type: 'array',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'content',
          label: 'Content',
          type: 'group',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
            },
            {
              name: 'body',
              label: 'Body',
              type: 'richText',
              required: true,
            },
          ],
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'cta',
          label: 'Call to Action',
          type: 'group',
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              label: 'Link',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
