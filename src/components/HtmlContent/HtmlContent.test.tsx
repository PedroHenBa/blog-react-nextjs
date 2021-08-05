import { HtmlContent } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<HtmlContent />', () => {
  it('should render HtmlContent component', () => {
    renderTheme(<HtmlContent html={'children'} />);
    const p = screen.getByText('children');
    expect(p).toBeInTheDocument();
  });

  it('should render Text with correct font size', () => {
    renderTheme(<HtmlContent html={'children'} />);
    const p = screen.getByText('children');
    expect(p).toHaveStyle({ 'font-size': 'calc(2.4rem + 0.2rem)' });
  });

  it('should match snapchat', () => {
    const { container } = renderTheme(<HtmlContent html={'children'} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  font-size: calc(2.4rem + 0.2rem);
}

.c0 p {
  margin: 3.2rem 0;
}

.c0 a,
.c0 a:visited,
.c0 a:link {
  color: #dc143c;
  -webkit-transition: all 200ms ease-in-out;
  transition: all 200ms ease-in-out;
}

.c0 a:hover {
  -webkit-filter: brightness(70%);
  filter: brightness(70%);
}

.c0 code {
  font-family: monospace;
  color: #dc143c;
  font-size: 1.6rem;
  background: #DDDDDD;
  padding: 0.2rem;
  margin: 0.2rem;
}

.c0 pre {
  background: #000000;
  padding: 2.4rem;
  color: #FFFFFF;
  font-family: monospace;
  margin: 2.4rem 0;
  width: 100%;
  overflow-x: auto;
  font-size: 1.6rem;
}

.c0 pre code {
  color: inherit;
  background: inherit;
}

.c0 img {
  max-width: 100%;
}

.c0 .image {
  background: #DDDDDD;
  line-height: 0;
  margin: 2.4rem 0;
}

.c0 .image figcaption {
  padding: 1.6rem;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.3;
}

.c0 .image-style-side {
  max-width: 50%;
  float: right;
  margin: 2.4rem 0;
}

.c0 ul,
.c0 ol {
  margin: 2.4rem 4.0rem;
}

.c0 hr {
  border: none;
  border: 0.1rem solid #DDDDDD;
}

.c0 .table {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
}

.c0 table {
  border-collapse: collapse;
  border: 1px solid #eee;
  border-bottom: 2px solid #00cccc;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.1),0px 10px 20px rgba(0,0,0,0.05),0px 20px 20px rgba(0,0,0,0.05),0px 30px 20px rgba(0,0,0,0.05);
}

.c0 table tr:hover {
  background: #f4f4f4;
}

.c0 table tr:hover td {
  color: #555;
}

.c0 table th,
.c0 table td {
  color: #999;
  border: 1px solid #eee;
  padding: 12px 35px;
  border-collapse: collapse;
}

.c0 table th {
  background: #00cccc;
  color: #fff;
  text-transform: uppercase;
}

.c0 table th.last {
  border-right: none;
}

.c0 blockquote {
  border-left: 0.5rem solid #dc143c;
  color: #AAAAAA;
  -webkit-filter: brightness(80%);
  filter: brightness(80%);
  padding-left: 2.4rem;
  font-style: italic;
  margin: 2.4rem;
}

@media (max-width:768px) {
  .c0 {
    font-size: 2rem;
  }

  .c0 .image-style-side {
    max-width: 100%;
    float: none;
    margin: 0;
  }
}

<div
  class="c0"
>
  children
</div>
`);
  });
});