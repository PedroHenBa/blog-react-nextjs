import * as Styled from './styles';
import { HtmlContent } from '../HtmlContent';
import { ArticleHeader, ArticleHeaderProps } from '../ArticleHeader';
import { PostContainer } from '../PostContainer';

export const Post = ({ title, excerpt, cover, author, categories, createdAt, content, id }: PostProps) => {
  return (
    <Styled.Container>
      <PostContainer size="max">
        <ArticleHeader
          createdAt={createdAt}
          author={author}
          categories={categories}
          id={id}
          excerpt={excerpt}
          title={title}
          cover={cover}
        />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Container>
  );
};

export type PostProps = {
  content: string;
} & ArticleHeaderProps;
