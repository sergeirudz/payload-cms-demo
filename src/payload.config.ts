import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildConfig } from 'payload/config';

import Users from './collections/Users';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      // connectionString: process.env.DATABASE_URI,
      // connectionString: 'postgres:postgres@localhost:5432/postgres',
      // host: '127.0.0.1',
      // port: 5432,
      // user: 'postgres',
      // password: 'postgres',
      // database: 'postgres',
      host: process.env.POSTGRESDB_HOST,
      port: process.env.POSTGRESDB_PORT,
      user: process.env.POSTGRESDB_USER,
      password: process.env.POSTGRESDB_PASSWORD,
      database: process.env.POSTGRESDB_DATABASE,
    },
  }),
});
