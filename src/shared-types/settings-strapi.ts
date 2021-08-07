import { StrapiImage } from './strapi-image';
import { MenuLinkProps } from '../components/MenuLink';

export type SettingsStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  logo: StrapiImage;
  menuLink: MenuLinkProps[];
  footer: string;
};
