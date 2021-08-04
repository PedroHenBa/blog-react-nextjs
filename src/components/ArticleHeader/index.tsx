import * as Styled from './styles';
import { StrapiImage } from '../../shared-types/strapi-image';
import { Heading } from '../Heading';
import { ArticleMeta, ArticleMetaProps } from '../ArticleMeta';

export const ArticleHeader = ({ title, excerpt, cover, author, categories, createdAt }: ArticleHeaderProps) => {
  return (
    <Styled.Container>
      <Heading as="h1" size="huge">
        {title}
      </Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover.url} alt={cover.alternativeText} />
      <ArticleMeta createdAt={createdAt} author={author} categories={categories} />
    </Styled.Container>
  );
};

export type ArticleHeaderProps = {
  id: string;
  title: string;
  excerpt: string;
  cover: StrapiImage;
} & ArticleMetaProps;
