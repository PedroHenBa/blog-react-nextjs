import * as Styled from './styles';
import { PostTag } from '../../shared-types/tag';
import Link from 'next/link';

export const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <Styled.Container>
      Tags:
      {tags.map((tag) => {
        return (
          <span key={tag.id}>
            <Link href={`/tag/${tag.slug}`}>
              <a>{tag.displayName}</a>
            </Link>
          </span>
        );
      })}
    </Styled.Container>
  );
};

export type PostTagsProps = {
  tags?: PostTag[];
};
