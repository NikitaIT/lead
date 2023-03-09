/* eslint-disable @typescript-eslint/no-unused-vars */
export const FixedXHtml = {
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  // type="button" not recommended
  // type="image" not recommended
  // type="reset" not recommended
  // type="datetime" not recommended
  checkbox: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="checkbox" {...props}></input>,
  color: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="color" {...props}></input>,
  date: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="date" {...props}></input>,
  datetimeLocal: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="datetime-local" {...props}></input>,
  email: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="email" {...props}></input>,
  file: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="file" {...props}></input>,
  hidden: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="hidden" {...props}></input>,
  month: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="month" {...props}></input>,
  number: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="number" {...props}></input>,
  password: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="password" {...props}></input>,
  radio: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="radio" {...props}></input>,
  range: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="range" {...props}></input>,
  search: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="search" {...props}></input>,
  submit: ({
    type,
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => (
    <button type="submit" {...props}>
      {children}
    </button>
  ),
  tel: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="tel" {...props}></input>,
  text: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="text" {...props}></input>,
  timeInput: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="time" {...props}></input>,
  url: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="url" {...props}></input>,
  week: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="week" {...props}></input>,
  switch: ({
    type,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >) => <input type="checkbox" {...props}></input>,
};
export const NativeXHtml = {
  a: 'a',
  abbr: 'abbr',
  address: 'address',
  area: 'area',
  article: 'article',
  aside: 'aside',
  audio: 'audio',
  b: 'b',
  base: 'base',
  bdi: 'bdi',
  bdo: 'bdo',
  blockquote: 'blockquote',
  body: 'body',
  br: 'br',
  button: 'button',
  canvas: 'canvas',
  caption: 'caption',
  cite: 'cite',
  code: 'code',
  col: 'col',
  colgroup: 'colgroup',
  datalist: 'datalist',
  dd: 'dd',
  del: 'del',
  details: 'details',
  dfn: 'dfn',
  dialog: 'dialog',
  div: 'div',
  dl: 'dl',
  dt: 'dt',
  em: 'em',
  embed: 'embed',
  fieldset: 'fieldset',
  figcaption: 'figcaption',
  figure: 'figure',
  footer: 'footer',
  form: 'form',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  head: 'head',
  header: 'header',
  hr: 'hr',
  html: 'html',
  i: 'i',
  iframe: 'iframe',
  img: 'img',
  input: 'input',
  ins: 'ins',
  kbd: 'kbd',
  // keygen: 'keygen', not recommended
  label: 'label',
  legend: 'legend',
  li: 'li',
  link: 'link',
  main: 'main',
  map: 'map',
  mark: 'mark',
  menu: 'menu',
  menuitem: 'menuitem', // not recommended
  meta: 'meta',
  meter: 'meter',
  nav: 'nav',
  noscript: 'noscript',
  object: 'object',
  ol: 'ol',
  optgroup: 'optgroup',
  option: 'option',
  output: 'output',
  p: 'p',
  // param: 'param', not recommended
  pre: 'pre',
  progress: 'progress',
  q: 'q',
  rp: 'rp',
  rt: 'rt',
  ruby: 'ruby',
  s: 's',
  samp: 'samp',
  script: 'script',
  section: 'section',
  select: 'select',
  small: 'small',
  source: 'source',
  span: 'span',
  strong: 'strong',
  style: 'style',
  sub: 'sub',
  summary: 'summary',
  detailsContent: 'div',
  sup: 'sup',
  table: 'table',
  tbody: 'tbody',
  td: 'td',
  textarea: 'textarea',
  tfoot: 'tfoot',
  th: 'th',
  thead: 'thead',
  time: 'time',
  title: 'title',
  tr: 'tr',
  track: 'track',
  u: 'u',
  ul: 'ul',
  var: 'var',
  video: 'video',
  wbr: 'wbr',
  ...FixedXHtml,
};
if (hasWindow()) {
  Object.assign(global, {
    XHtml: {
      ...NativeXHtml,
    },
  });
}
export const EditXHtml = {
  useNative() {
    if (!hasWindow()) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).XHtml = NativeXHtml;
  },
  useCustom(jsx) {
    if (!hasWindow()) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).XHtml = jsx;
  },
  usePartial(jsx) {
    if (!hasWindow()) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).XHtml = {
      ...(window as any).XHtml,
      ...jsx,
    };
  },
} as {
  useNative(): void;
  useCustom(jsx: Record<keyof typeof NativeXHtml, unknown>): void;
  usePartial(jsx: Partial<Record<keyof typeof NativeXHtml, unknown>>): void;
};
function hasWindow() {
  return 'document' in window;
}
