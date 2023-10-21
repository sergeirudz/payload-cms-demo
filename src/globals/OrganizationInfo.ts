import type { GlobalConfig } from 'payload/types';

import socialMedia from '../fields/socialMedia';

const OrganizationInfo: GlobalConfig = {
  slug: 'organization-info',
  fields: [
    {
      name: 'organizationInfo',
      label: 'Organization Info',
      type: 'group',
      fields: [
        {
          name: 'organizationInfo',
          label: 'Organization Info',
          type: 'group',
          fields: [
            {
              name: 'name',
              label: 'Name',
              type: 'text',
            },
            {
              name: 'email',
              label: 'Email (info@example.com)',
              type: 'text',
            },
            {
              name: 'phone',
              label: 'Phone (+37255554444)',
              type: 'text',
            },
            {
              name: 'country',
              label: 'Country',
              type: 'text',
            },
            {
              name: 'city',
              label: 'City',
              type: 'text',
            },
            {
              name: 'postalCode',
              label: 'Postal Code',
              type: 'text',
            },
            {
              name: 'streetAddress',
              label: 'Street Address',
              type: 'text',
            },
            socialMedia,
          ],
        },
      ],
    },
  ],
};

export default OrganizationInfo;
