import * as Styled from './styles';
import { Heading } from '../Heading/';
import { LogoLink } from '../LogoLink';

export const Header = ({ blogName, blogDescription, logo, showText = true }: HeaderProps) => {
  return (
    <Styled.Container>
      <LogoLink text={`${blogName} - ${blogDescription}`} link="/" srcImage={logo} />

      {showText && (
        <Styled.TextContainer>
          <Heading size="small" as="h2">
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.TextContainer>
      )}
    </Styled.Container>
  );
};

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};
