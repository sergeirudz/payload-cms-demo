import type { Block } from 'payload/types';

import { blockFields } from '../../fields/blockFIelds';

export const MediaBlock: Block = {
  slug: 'media',
  fields: [
    blockFields({
      name: 'media',
      fields: [
        {
          name: 'position',
          type: 'select',
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Wide',
              value: 'wide',
            },
          ],
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'richText',
        },
      ],
    }),
  ],
};
