"use client";

import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";
import styles from "./text-editor.module.scss";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

type TextEditorProps = {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
};

export function TextEditor({ content, setContent }: Readonly<TextEditorProps>) {
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  return (
    <div className={styles.editor}>
      <QuillEditor
        value={content}
        onChange={(val) => setContent(val)}
        modules={quillModules}
        formats={quillFormats}
      />
    </div>
  );
}
