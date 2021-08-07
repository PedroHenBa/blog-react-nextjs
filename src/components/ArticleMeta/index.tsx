import * as Styled from './styles';
import { Category } from '../../shared-types/category';
import { Author } from '../../shared-types/author';
import { formatDate } from '../../utils/format-date';
import Link from 'next/link';

export const ArticleMeta = ({ createdAt, author = undefined, categories = [] }: ArticleMetaProps) => {
  return (
    <Styled.Container>
      <p>
        {typeof author !== 'undefined' && (
          <>
            <span>Por </span>
            <Link href={`/author/${author.slug}`}>
              <a>{author.displayName}</a>
            </Link>
            <span className="separator">|</span>
          </>
        )}

        <time dateTime={createdAt}>em {formatDate(createdAt)}</time>
        {categories.length > 0 && (
          <>
            <span className="separator">|</span>
            <span className="categories">
              {categories.map((category) => (
                <span key={`article-meta-cat-${category.id}`}>
                  <Link href={`/category/${category.slug}`}>
                    <a>{category.displayName}</a>
                  </Link>
                </span>
              ))}
            </span>
          </>
        )}
      </p>
    </Styled.Container>
  );
};

export type ArticleMetaProps = {
  createdAt: string;
  author?: Author;
  categories?: Category[];
};
