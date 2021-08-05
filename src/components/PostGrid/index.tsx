import * as Styled from './styles';
import { PostCard, PostCardProps } from '../PostCard';

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Styled.Container>
      {posts.length === 0 && <Styled.NotFound>Nenhum post encontrado aqui</Styled.NotFound>}

      <Styled.Grid>
        {posts.map((post) => (
          <PostCard key={`post-card-${post.id}`} {...post} />
        ))}
      </Styled.Grid>
    </Styled.Container>
  );
};

export type PostGridProps = {
  posts?: PostCardProps[];
};
