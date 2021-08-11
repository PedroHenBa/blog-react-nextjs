import styled from 'styled-components';

export const PrismStyles = styled.div`
pre[class*="language-"],
code[class*="language-"] {
\tcolor: #d4d4d4;
\tfont-size: 13px;
\ttext-shadow: none;
\tfont-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
\tdirection: ltr;
\ttext-align: left;
\twhite-space: pre;
\tword-spacing: normal;
\tword-break: normal;
\tline-height: 1.5;
\t-moz-tab-size: 4;
\t-o-tab-size: 4;
\ttab-size: 4;
\t-webkit-hyphens: none;
\t-moz-hyphens: none;
\t-ms-hyphens: none;
\thyphens: none;
}

pre[class*="language-"]::selection,
code[class*="language-"]::selection,
pre[class*="language-"] *::selection,
code[class*="language-"] *::selection {
\ttext-shadow: none;
\tbackground: #75a7ca;
}

@media print {
\tpre[class*="language-"],
\tcode[class*="language-"] {
\t\ttext-shadow: none;
\t}
}

pre[class*="language-"] {
\tpadding: 1em;
\tmargin: .5em 0;
\toverflow: auto;
\tbackground: #1e1e1e;
}

:not(pre) > code[class*="language-"] {
\tpadding: .1em .3em;
\tborder-radius: .3em;
\tcolor: #db4c69;
\tbackground: #f9f2f4;
}
/*********************************************************
* Tokens
*/
.namespace {
\topacity: .7;
}

.token.doctype .token.doctype-tag {
\tcolor: #569CD6;
}

.token.doctype .token.name {
\tcolor: #9cdcfe;
}

.token.comment,
.token.prolog {
\tcolor: #6a9955;
}

.token.punctuation,
.language-html .language-css .token.punctuation,
.language-html .language-javascript .token.punctuation {
\tcolor: #d4d4d4;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.inserted,
.token.unit {
\tcolor: #b5cea8;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.deleted {
\tcolor: #ce9178;
}

.language-css .token.string.url {
\ttext-decoration: underline;
}

.token.operator,
.token.entity {
\tcolor: #d4d4d4;
}

.token.operator.arrow {
\tcolor: #569CD6;
}

.token.atrule {
\tcolor: #ce9178;
}

.token.atrule .token.rule {
\tcolor: #c586c0;
}

.token.atrule .token.url {
\tcolor: #9cdcfe;
}

.token.atrule .token.url .token.function {
\tcolor: #dcdcaa;
}

.token.atrule .token.url .token.punctuation {
\tcolor: #d4d4d4;
}

.token.keyword {
\tcolor: #569CD6;
}

.token.keyword.module,
.token.keyword.control-flow {
\tcolor: #c586c0;
}

.token.function,
.token.function .token.maybe-class-name {
\tcolor: #dcdcaa;
}

.token.regex {
\tcolor: #d16969;
}

.token.important {
\tcolor: #569cd6;
}

.token.italic {
\tfont-style: italic;
}

.token.constant {
\tcolor: #9cdcfe;
}

.token.class-name,
.token.maybe-class-name {
\tcolor: #4ec9b0;
}

.token.console {
\tcolor: #9cdcfe;
}

.token.parameter {
\tcolor: #9cdcfe;
}

.token.interpolation {
\tcolor: #9cdcfe;
}

.token.punctuation.interpolation-punctuation {
\tcolor: #569cd6;
}

.token.boolean {
\tcolor: #569cd6;
}

.token.property,
.token.variable,
.token.imports .token.maybe-class-name,
.token.exports .token.maybe-class-name {
\tcolor: #9cdcfe;
}

.token.selector {
\tcolor: #d7ba7d;
}

.token.escape {
\tcolor: #d7ba7d;
}

.token.tag {
\tcolor: #569cd6;
}

.token.tag .token.punctuation {
\tcolor: #808080;
}

.token.cdata {
\tcolor: #808080;
}

.token.attr-name {
\tcolor: #9cdcfe;
}

.token.attr-value,
.token.attr-value .token.punctuation {
\tcolor: #ce9178;
}

.token.attr-value .token.punctuation.attr-equals {
\tcolor: #d4d4d4;
}

.token.entity {
\tcolor: #569cd6;
}

.token.namespace {
\tcolor: #4ec9b0;
}
/*********************************************************
* Language Specific
*/

pre[class*="language-javascript"],
code[class*="language-javascript"],
pre[class*="language-jsx"],
code[class*="language-jsx"],
pre[class*="language-typescript"],
code[class*="language-typescript"],
pre[class*="language-tsx"],
code[class*="language-tsx"] {
\tcolor: #9cdcfe;
}

pre[class*="language-css"],
code[class*="language-css"] {
\tcolor: #ce9178;
}

pre[class*="language-html"],
code[class*="language-html"] {
\tcolor: #d4d4d4;
}

.language-regex .token.anchor {
\tcolor: #dcdcaa;
}

.language-html .token.punctuation {
\tcolor: #808080;
}
/*********************************************************
* Line highlighting
*/
pre[data-line] {
\tposition: relative;
}

pre[class*="language-"] > code[class*="language-"] {
\tposition: relative;
\tz-index: 1;
}

.line-highlight {
\tposition: absolute;
\tleft: 0;
\tright: 0;
\tpadding: inherit 0;
\tmargin-top: 1em;
\tbackground: #f7ebc6;
\tbox-shadow: inset 5px 0 0 #f7d87c;
\tz-index: 0;
\tpointer-events: none;
\tline-height: inherit;
\twhite-space: pre;
}
`;
