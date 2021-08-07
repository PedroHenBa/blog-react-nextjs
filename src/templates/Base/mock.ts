import { BaseTemplateProps } from './index';

export default {
  settings: {
    id: '6106e778c44963154886c2e3',
    blogName: 'Bloguinho',
    blogDescription:
      'am tincidunt ipsum et imperdiet tincidunt. Fusce eget elementum mi. Nulla pharetra aliquet turpis sit amet elementum. In placerat enim ut nequ',
    logo: {
      id: '6106c643631c9f05f0951ad7',
      alternativeText: '',
      url: 'https://res.cloudinary.com/djve6xgfe/image/upload/v1627833918/na_14eb8ec6d4.jpg',
    },
    menuLink: [
      {
        id: '6106e778c44963154886c2e4',
        link: 'link1',
        text: 'text1',
        newTab: true,
      },
      {
        id: '6106e778c44963154886c2e5',
        link: 'link2',
        text: 'link2',
        newTab: false,
      },
    ],
    footer: '<p>Feito com carinho, ph</p>',
  },
  children: 'Salve',
} as BaseTemplateProps;
