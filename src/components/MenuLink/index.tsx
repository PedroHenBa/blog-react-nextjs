import * as Styled from './styles';
import Link from 'next/link';
import { ReactNode } from 'react';

export const MenuLink = ({ text, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = !!link.match(/^\//);

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container target={target}>{text}</Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {text}
    </Styled.Container>
  );
};

export type MenuLinkProps = {
  text: ReactNode;
  newTab?: boolean;
  link: string;
};
