import { request } from 'graphql-request';
import config from '../config/index';
import { GRAPHQL_QUERIES } from '../graphql/queries';
import { PostStrapi } from '../shared-types/post-strapi';
import { SettingsStrapi } from '../shared-types/settings-strapi';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
};

export async function loadPosts(variables: LoadPostsVariables = {}): Promise<StrapiPostAndSettings> {
  const defaultVariables: LoadPostsVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };

  const data = await request(config.graphqlUrl, GRAPHQL_QUERIES, { ...defaultVariables, ...variables });
  return data;
}
