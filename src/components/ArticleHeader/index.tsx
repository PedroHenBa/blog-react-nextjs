import * as Styled from './styles';
import { Category } from '../../shared-types/category';
import { Author } from '../../shared-types/author';
import { StrapiImage } from '../../shared-types/strapi-image';
import { Heading } from '../Heading';
import { ArticleMeta } from '../ArticleMeta';

export const ArticleHeader = ({ title, excerpt, cover, author, categories, createdAt }: ArticleHeaderProps) => {
  return (
    <Styled.Container>
      <Heading as="h1" size="big">
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
  author: Author;
  categories: Category[];
  createdAt: string;
};
