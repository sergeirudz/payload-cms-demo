import type { Field } from 'payload/types';

const pageMeta: Field = {
  label: 'Page Meta',
  type: 'tabs',
  tabs: [
    // SEO Meta
    {
      label: 'SEO',
      description: 'Page meta info for SEO',
      fields: [
        {
          name: 'seoTitle',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'seoDescription',
          label: 'Description',
          type: 'text',
          required: true,
        },
      ],
    },
    // OpenGraph Meta
    {
      label: 'Facebook',
      description: 'Page meta info for Facebook',
      fields: [
        {
          name: 'ogTitle',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'ogDescription',
          label: 'Description',
          type: 'text',
          required: true,
        },
        {
          name: 'ogSiteName',
          label: 'Site Name',
          type: 'text',
          required: true,
        },
        {
          name: 'ogSiteUrl',
          label: 'Site URL',
          type: 'text',
          required: true,
        },
        {
          name: 'ogType',
          label: 'Type',
          type: 'text',
          required: true,
        },
        {
          name: 'ogImage',
          label: 'Image',
          type: 'text',
          required: true,
        },
      ],
    },
    // Twitter Meta
    {
      label: 'Twitter',
      description: 'Page meta info for Twitter',
      fields: [
        {
          name: 'twTitle',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'twDescription',
          label: 'Description',
          type: 'text',
          required: true,
        },
        {
          name: 'twSite',
          label: '@twitterusername',
          type: 'text',
          required: true,
        },
        {
          name: 'twImage',
          label: 'Image',
          type: 'text',
          required: true,
        },
        {
          name: 'twImageAlt',
          label: 'Image Alt',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};

export default pageMeta;
