import * as Styled from './styles';
import { PostCard, PostCardProps } from '../PostCard';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef, useState } from 'react';
import { Cancel } from '@styled-icons/material-outlined/Cancel';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeOut = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeOut.current);

    if (router?.query?.q === searchValue) {
      return;
    }

    const q = searchValue;

    if (!q || q.length < 3) return;

    inputTimeOut.current = setTimeout(() => {
      setIsReady(false);
      router.push({ pathname: '/search/', query: { q } }).then(() => setIsReady(true));
    }, 700);
    return () => clearTimeout(inputTimeOut.current);
  }, [searchValue, router]);

  return (
    <Styled.Container>
      <Styled.SearchContainer>
        <Styled.SearchInput
          placeholder="Pesquise"
          type="search"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />
        {searchDisabled ? <Cancel aria-label="Input disabled" /> : <CheckCircleOutline aria-label="Input enabled" />}
      </Styled.SearchContainer>

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
