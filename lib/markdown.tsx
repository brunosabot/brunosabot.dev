import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Gist from "../components/post/Gist";

interface ICodeProps {
  className?: string;
  children?: React.ReactNode;
}

interface IGistProps {
  lang: string;
  file?: string;
  code?: React.ReactNode;
}

interface IImgProps {
  src?: string;
  alt?: string;
}

export const components = {
  code: ({ className, children }: ICodeProps) => {
    if (className === undefined) return <code>{children}</code>;

    return <Gist code={children} lang={className.replace("language-", "")} />;
  },
  Gist: (props: IGistProps) => {
    return <Gist {...props} />;
  },
  img: (props: IImgProps) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} src={props.src} alt={props.alt} loading="lazy" />
  ),
};

export function MarkdownProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
