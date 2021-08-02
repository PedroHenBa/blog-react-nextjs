import * as Styled from './styles';

export const HtmlContent = ({ html }: HtmlContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};

export type HtmlContentProps = {
  html: string;
};
