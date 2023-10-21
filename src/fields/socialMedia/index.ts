import { Field } from 'payload/types';

enum SocialMedia {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Twitter = 'twitter',
  LinkedIn = 'linkedin',
  YouTube = 'youtube',
}

const socialMedia: Field = {
  name: 'socialMedia',
  label: 'Social Media Pages',
  type: 'array',
  fields: [
    {
      name: SocialMedia.Facebook,
      label: 'Social Media Link',
      type: 'group',
      fields: [
        {
          name: 'socialMediaIcon',
          label: 'Social Media Icon',
          type: 'select',
          required: true,
          unique: true,
          options: [
            {
              label: 'Facebook',
              value: SocialMedia.Facebook,
            },
            {
              label: 'Instagram',
              value: SocialMedia.Instagram,
            },
            {
              label: 'Twitter',
              value: SocialMedia.Twitter,
            },
            {
              label: 'LinkedIn',
              value: SocialMedia.LinkedIn,
            },
            {
              label: 'YouTube',
              value: SocialMedia.YouTube,
            },
          ],
        },
        {
          name: 'url',
          label: 'URL - "https://facebook.com/page-name-here"',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          label: 'Name - "Abipolitseinik Facebook Leht"',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};

export default socialMedia;
