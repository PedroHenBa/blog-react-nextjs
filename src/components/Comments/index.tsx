import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  if (!allowComments) {
    return null;
  }

  return (
    <Styled.Container>
      <DiscussionEmbed
        shortname="blog-ph"
        config={{ url: `/post/${slug}`, identifier: id, title: title, language: 'pt_BR' }}
      />
    </Styled.Container>
  );
};

export type CommentsProps = {
  id: string;
  title: string;
  slug: string;
  allowComments: boolean;
};
