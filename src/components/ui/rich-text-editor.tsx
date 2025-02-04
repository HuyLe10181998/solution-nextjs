"use client";
import { FC, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import Tools from "../RichTextEditor/Tools";
import Link from "@tiptap/extension-link";

interface Props {
  onChange?: (html: string) => void;
  initialContent?: string;
}

const extensions = [
  StarterKit,
  Underline,
  Link.configure({
    openOnClick: false,
    autolink: false,
    linkOnPaste: true,
    HTMLAttributes: {
      target: "",
    },
  }),
  Image.configure({
    inline: false,
    HTMLAttributes: {
      class: "w-[80%] mx-auto",
    },
  }),
  TextAlign.configure({
    types: ["paragraph"],
  }),
  Placeholder.configure({
    placeholder: "Write something...",
  }),
];

const RichEditor: FC<Props> = ({ onChange, initialContent = '' }) => {
  const editor = useEditor({
    extensions,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl outline-none",
      },
    },
    content: initialContent || 'Type content here...',
    onUpdate: ({ editor }) => {
      // Call onChange whenever content changes
      onChange?.(editor.getHTML());
    },
  });

  //   editor?.commands.setContent("")

  const onImageSelect = (image: string) => {
    editor
      ?.chain()
      .focus()
      .setImage({ src: image, alt: "this is an image" })
      .run();
  };

  return (
    <>
      <div className="flex flex-col space-y-6 border border-gray-200 rounded-lg pb-4">
        <div className="bg-gray-100 p-4 z-50 rounded-lg">
          <Tools
            editor={editor}
          />
        </div>
        <div className="flex-1 px-4">
          <EditorContent
            editor={editor}
            className="h-full"
            // extensions={[StarterKit]}
            // content="<h1>Hello world <strong>How are you?</strong></h1>"
          />
        </div>
      </div>
     
    </>
  );
};

export default RichEditor;
