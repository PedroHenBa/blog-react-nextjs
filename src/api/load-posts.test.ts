import { defaultLoadPostsVariables, loadPosts } from './load-posts';
import request from 'graphql-request';
import config from '../config';
import { GRAPHQL_QUERIES } from '../graphql/queries';

jest.mock('graphql-request');
jest.mock('../graphql/queries', () => {
  return { GRAPHQL_QUERIES: 'A_QUERY' };
});

describe('< />', () => {
  it('should call request with correct variables', async () => {
    await loadPosts();
    expect(request).toHaveBeenCalledWith(config.graphqlUrl, GRAPHQL_QUERIES, defaultLoadPostsVariables);
  });

  it('should call request with custom variables', async () => {
    await loadPosts({
      authorSlug: 'AUTHOR',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'SLUG',
      sort: 'SORT',
      start: 1,
    });
    expect(request).toHaveBeenCalledWith(config.graphqlUrl, GRAPHQL_QUERIES, {
      ...defaultLoadPostsVariables,
      authorSlug: 'AUTHOR',
      tagSlug: 'TAG',
      categorySlug: 'CAT',
      limit: 100,
      postSearch: 'SEARCH',
      postSlug: 'SLUG',
      sort: 'SORT',
      start: 1,
    });
  });
});
