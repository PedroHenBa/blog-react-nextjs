import { loadPosts, StrapiPostAndSettings } from '../api/load-posts';
import Head from 'next/head';
import { PostsTemplate } from '../templates/PostsTemplate';
import { GetStaticProps } from 'next';

export default function Index({ posts, setting }: StrapiPostAndSettings) {
  return (
    <>
      <Head>
        <title>{setting.blogName}</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate settings={setting} posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
    },
    revalidate: 24 * 24 * 60,
  };
};
