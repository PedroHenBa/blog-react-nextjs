import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { PostStrapi } from '../../shared-types/post-strapi';
import { BaseTemplate } from '../Base';
import { PostGrid } from '../../components/PostGrid';
import * as Styled from './styles';

export const PostsTemplate = ({ settings, posts }: PostsTemplateProps) => {
  return (
    <>
      <BaseTemplate settings={settings}>
        <PostGrid posts={posts} />
        <Styled.ButtonContainer>
          <Styled.Button>Load more posts</Styled.Button>
        </Styled.ButtonContainer>
      </BaseTemplate>
    </>
  );
};

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};
