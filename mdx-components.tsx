import type { MDXComponents } from 'mdx/types';
import { Code } from 'bright';
import JSInterpreter from './components/code/JSInterpreter';
import { ReactNode } from 'react';

Code.theme = 'github-light';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => (
      <pre className={props.className ?? 'not-prose'}>{props.children}</pre>
    ),
    code: (props) => {
      const content = props.children?.toString() ?? '';
      const code = content.trim();

      if (props.className === 'language-js')
        return <JSInterpreter code={code} />;
      else return <FallbackCode {...props} />;
    },
  };
}

const FallbackCode = ({ children }: { children?: ReactNode }) => (
  <Code>{children}</Code>
);
