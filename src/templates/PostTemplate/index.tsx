import * as Styled from './styles';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { PostStrapi } from '../../shared-types/post-strapi';
import { BaseTemplate } from '../Base';
import { Post } from '../../components/Post';
import { PostTags } from '../../components/PostTags';
import { Comments } from '../../components/Comments';

export const PostTemplate = ({ settings, post }: PostTemplateProps) => {
  return (
    <BaseTemplate settings={settings}>
      <Post {...post} />
      <Styled.TagsContainer>
        <PostTags tags={post.tags} />
      </Styled.TagsContainer>
      <Comments id={post.id} title={post.title} slug={post.slug} allowComments={post.allowComments} />
    </BaseTemplate>
  );
};

export type PostTemplateProps = {
  settings: SettingsStrapi;
  post: PostStrapi;
};
