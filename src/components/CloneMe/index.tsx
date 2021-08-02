import * as Styled from './styles';

export const CloneMe = ({ footerHtml }: CloneMeProps) => {
  return (
    <Styled.Container>
      <h1>{footerHtml}</h1>
    </Styled.Container>
  );
};

export type CloneMeProps = {
  footerHtml: string;
};
