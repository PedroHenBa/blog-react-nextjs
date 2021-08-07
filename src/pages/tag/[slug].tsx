import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import { loadPosts, StrapiPostAndSettings } from '../../api/load-posts';
import Head from 'next/head';
import { PostsTemplate } from '../../templates/PostsTemplate';

export default function TagPage({ posts, setting }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const tagName = posts[0].tags.filter((tag) => tag.slug === router.query.slug)[0].displayName;

  return (
    <>
      <Head>
        <title>
          Category: {tagName} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate settings={setting} posts={posts} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (ctx) => {
  let data = null;

  try {
    data = await loadPosts({ tagSlug: ctx.params.slug as string });
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
