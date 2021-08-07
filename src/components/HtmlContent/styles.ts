import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};

    p {
      margin: ${theme.spacing.big} 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondary};
      transition: all 200ms ease-in-out;
    }

    a:hover {
      filter: brightness(70%);
    }

    code {
      font-family: monospace;
      color: ${theme.colors.secondary};
      font-size: ${theme.fonts.sizes.small};
      background: ${theme.colors.mediumGray};
      padding: 0.2rem;
      margin: 0.2rem;
    }

    pre {
      background: ${theme.colors.primary};
      padding: ${theme.spacing.medium};
      color: ${theme.colors.white};
      font-family: monospace;
      margin: ${theme.spacing.medium} 0;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.fonts.sizes.small};
    }

    pre code {
      color: inherit;
      background: inherit;
    }

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacing.medium} 0;
    }

    .image figcaption {
      padding: ${theme.spacing.small};
      text-align: center;
      font-size: ${theme.fonts.sizes.small};
      line-height: 1.3;
    }

    .image-style-side {
      max-width: 50%;
      float: right;
      margin: ${theme.spacing.medium} 0;
    }

    ul,
    ol {
      margin: ${theme.spacing.medium} ${theme.spacing.xbig};
    }

    hr {
      border: none;
      border: 0.1rem solid ${theme.colors.mediumGray};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      border-collapse: collapse;
      border: 1px solid #eee;
      border-bottom: 2px solid #00cccc;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05), 0px 20px 20px rgba(0, 0, 0, 0.05),
        0px 30px 20px rgba(0, 0, 0, 0.05);
      tr {
        &:hover {
          background: #f4f4f4;

          td {
            color: #555;
          }
        }
      }
      th,
      td {
        color: #999;
        border: 1px solid #eee;
        padding: 12px 35px;
        border-collapse: collapse;
      }
      th {
        background: #00cccc;
        color: #fff;
        text-transform: uppercase;
        &.last {
          border-right: none;
        }
      }
    }

    blockquote {
      border-left: 0.5rem solid ${theme.colors.secondary};
      color: ${theme.colors.darkGray};
      filter: brightness(80%);
      padding-left: ${theme.spacing.medium};
      font-style: italic;
      margin: ${theme.spacing.medium};
    }

    @media ${theme.media.lteMedium} {
      font-size: 2rem;

      .image-style-side {
        max-width: 100%;
        float: none;
        margin: 0;
      }
    }
  `}
`;
