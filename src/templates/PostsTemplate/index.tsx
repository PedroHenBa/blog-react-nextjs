import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { PostStrapi } from '../../shared-types/post-strapi';
import { BaseTemplate } from '../Base';
import { PostGrid } from '../../components/PostGrid';
import * as Styled from './styles';
import { useState, useEffect } from 'react';
import { loadPosts, LoadPostsVariables } from '../../api/load-posts';

export const PostsTemplate = ({ settings, posts = [], variables }: PostsTemplateProps) => {
  const [statePosts, setStatePosts] = useState(posts);
  const [stateVariables, setStateVariables] = useState(variables);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);

  useEffect(() => {
    setStatePosts(posts);
    setNoMorePosts(false);
    setButtonDisabled(false);
    setStateVariables(variables);
  }, [posts, variables]);

  const handleMorePosts = async () => {
    setButtonDisabled(true);

    const newVaribles = {
      ...stateVariables,
      start: stateVariables.start + stateVariables.limit,
      limit: stateVariables.limit,
    };

    const morePosts = await loadPosts(newVaribles);

    if (!morePosts || !morePosts.posts || !morePosts.posts.length) {
      setNoMorePosts(true);
      return;
    }

    setButtonDisabled(false);
    setStateVariables(newVaribles);
    setStatePosts((p) => [...p, ...morePosts.posts]);
  };

  return (
    <>
      <BaseTemplate settings={settings}>
        <PostGrid posts={statePosts} />
        {statePosts.length && (
          <Styled.ButtonContainer>
            <Styled.Button onClick={handleMorePosts} disabled={buttonDisabled}>
              {noMorePosts ? 'Sem Posts' : 'Carregar mais posts'}
            </Styled.Button>
          </Styled.ButtonContainer>
        )}
      </BaseTemplate>
    </>
  );
};

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
  variables?: LoadPostsVariables;
};
