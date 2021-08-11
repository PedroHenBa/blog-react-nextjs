import * as Styled from './styles';
import { PrismStyles } from './prism-styles';
import { useEffect } from 'react';
import Prism from 'prismjs';

export const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <PrismStyles>
      <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
    </PrismStyles>
  );
};

export type HtmlContentProps = {
  html: string;
};
