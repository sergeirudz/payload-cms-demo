import { Block, CollectionConfig, FieldHook } from 'payload/types';
import { Slider } from '../blocks/Slider';
import pageMeta from '../fields/pageMeta';
import { slugField } from '../fields/slug';
import Content from '../blocks/Content';
import { formatPreviewURL } from '../utilities/formatPreviewURL';
import { fullTitle } from '../fields/fullTitle';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    // preview: (doc) => formatPreviewURL('pages', doc),
    defaultColumns: ['title', 'createdAt', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Sections',
          description: 'Select the blocks you want to display on this page',
          fields: [
            {
              name: 'pageSections',
              label: 'Page sections',
              type: 'blocks',
              required: true,
              blocks: [Slider, Content],
            },
          ],
        },
        {
          name: 'pageMeta',
          label: 'Page Meta',
          interfaceName: 'TabTwo',
          fields: [
            {
              name: 'slug',
              label: 'Slug',
              type: 'text',
              index: true,
            },
            //  pageMeta
          ],
        },
      ],
    },
  ],
};

export default Pages;
