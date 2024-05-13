"use client";

import parse from "html-react-parser";

type PostProps = {
  content: string;
};

export function Post({ content }: Readonly<PostProps>) {
  return <div className="preview">{parse(content)}</div>;
}
