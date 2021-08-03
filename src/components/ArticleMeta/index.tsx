import * as Styled from './styles';
import { Category } from '../../shared-types/category';
import { Author } from '../../shared-types/author';
import { formatDate } from '../../utils/format-date';

export const ArticleMeta = ({ createdAt, author, categories }: ArticleMetaProps) => {
  return (
    <Styled.Container>
      <p>
        <span>Por </span>
        <a href={`/author/${author.slug}`}>{author.displayName}</a>
        <span className="separator">|</span>
        <time dateTime={createdAt}>em {formatDate(createdAt)}</time>
        <span className="separator">|</span>
        <span className="categories">
          {categories.map((category) => (
            <span key={`article-meta-cat-${category.id}`}>
              <a href={`/category/${category.slug}`}>{category.displayName}</a>
            </span>
          ))}
        </span>
      </p>
    </Styled.Container>
  );
};

export type ArticleMetaProps = {
  createdAt: string;
  author: Author;
  categories: Category[];
};
