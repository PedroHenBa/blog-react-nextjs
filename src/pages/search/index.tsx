import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { defaultLoadPostsVariables, loadPosts, StrapiPostAndSettings } from '../../api/load-posts';
import Head from 'next/head';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function SearchPage({ posts, setting, variables }: StrapiPostAndSettings) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Pesquisa: {router.query.q} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate settings={setting} posts={posts} variables={variables} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<StrapiPostAndSettings> = async (ctx) => {
  let data = null;
  const query = ctx.query.q || '';
  const variables = { postSearch: query as string };

  try {
    data = await loadPosts(variables);
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
      variables: {
        ...defaultLoadPostsVariables,
        ...variables,
      },
    },
  };
};
