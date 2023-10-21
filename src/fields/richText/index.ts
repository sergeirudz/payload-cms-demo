// import type { RichTextElement, RichTextField, RichTextLeaf } from 'payload/dist/fields/config/types'

import { RichTextField } from 'payload/types';
import deepMerge from '../../utilities/deepMerge';
import link from '../link';
import elements from './elements';
import leaves from './leaves';
import { RichTextElement, RichTextLeaf } from '@payloadcms/richtext-slate';

type RichText = (
  overrides?: Partial<RichTextField>,
  additions?: {
    elements?: RichTextElement[];
    leaves?: RichTextLeaf[];
  }
) => RichTextField;

const richText: RichText = (
  overrides,
  additions = {
    elements: [...elements],
    leaves: [...leaves],
  }
) =>
  deepMerge<RichTextField, Partial<RichTextField>>(
    {
      name: 'richText',
      type: 'richText',
      required: true,
    },
    overrides
  );

export default richText;
