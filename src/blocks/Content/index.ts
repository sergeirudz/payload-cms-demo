import type { Block, Field } from 'payload/types';

import { blockFields } from '../../fields/blockFIelds';
import {
  BlocksFeature,
  LinkFeature,
  UploadFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

const Content: Block = {
  slug: 'content',
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          LinkFeature({
            // Example showing how to customize the built-in fields
            // of the Link feature
            fields: [
              {
                name: 'rel',
                label: 'Rel Attribute',
                type: 'select',
                hasMany: true,
                options: ['noopener', 'noreferrer', 'nofollow'],
                admin: {
                  description:
                    'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
                },
              },
            ],
          }),
          UploadFeature({
            collections: {
              uploads: {
                // Example showing how to customize the built-in fields
                // of the Upload feature
                fields: [
                  {
                    name: 'caption',
                    type: 'richText',
                    editor: lexicalEditor(),
                  },
                ],
              },
            },
          }),
          // This is incredibly powerful. You can re-use your Payload blocks
          // directly in the Lexical editor as follows:
          //   BlocksFeature({
          //     blocks: [
          //       Banner,
          //       CallToAction,
          //     ],
          //   }),
        ],
      }),
    },
  ],
};

export default Content;
