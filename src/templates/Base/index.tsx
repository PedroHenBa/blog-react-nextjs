import * as Styled from './styles';
import { ReactNode } from 'react';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { ToggleTheme } from '../../components/ToggleTheme';

export const BaseTemplate = ({ children, settings }: BaseTemplateProps) => {
  return (
    <Styled.Container>
      <ToggleTheme />
      <Menu links={settings.menuLink} blogName={settings.blogName} logo={settings.logo.url} />

      <Styled.HeaderContainer>
        <Header blogName={settings.blogName} blogDescription={settings.blogDescription} logo={settings.logo.url} />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={settings.footer} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Container>
  );
};

export type BaseTemplateProps = {
  children: ReactNode;
  settings: SettingsStrapi;
};
