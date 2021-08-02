import * as Styled from './styles';
import { HtmlContent } from '../HtmlContent';

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <HtmlContent html={footerHtml} />
    </Styled.Container>
  );
};

export type FooterProps = {
  footerHtml: string;
};
