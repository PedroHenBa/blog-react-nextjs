import * as Styled from './styles';
import { PostCard, PostCardProps } from '../PostCard';
import { useRouter } from 'next/dist/client/router';

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  const router = useRouter();

  return (
    <Styled.Container>
      {posts.length === 0 && <Styled.NotFound>Nenhum post encontrado aqui</Styled.NotFound>}

      <form action="/search/" method="GET">
        <Styled.SearchContainer>
          <Styled.SearchInput placeholder="Pesquise" type="search" name="q" defaultValue={router?.query?.q || ''} />
        </Styled.SearchContainer>
      </form>

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
