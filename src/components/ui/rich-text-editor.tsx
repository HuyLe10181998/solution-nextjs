'use client'
import { FC, useState } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import Tools from '../RichTextEditor/Tools'
import Link from '@tiptap/extension-link'

interface Props {
  onChange?: (html: string) => void
  initialContent?: string
}

const extensions = [
  StarterKit,
  Underline,
  Link.configure({
    openOnClick: false,
    autolink: false,
    linkOnPaste: true,
    HTMLAttributes: {
      target: '',
    },
  }),
  Image.configure({
    inline: false,
    HTMLAttributes: {
      class: 'w-[80%] mx-auto',
    },
  }),
  TextAlign.configure({
    types: ['paragraph'],
  }),
  Placeholder.configure({
    placeholder: 'Write something...',
  }),
]

const RichEditor: FC<Props> = ({ onChange, initialContent = '' }) => {
  const editor = useEditor({
    extensions,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl outline-none',
      },
    },
    content: initialContent || 'Type content here...',
    onUpdate: ({ editor }) => {
      const content = editor.getHTML();
      
      // Create a temporary DOM element to parse the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      
      // Find all list items with empty paragraphs
      const listItems = doc.querySelectorAll('li');
      let hasChanges = false;
      
      listItems.forEach(li => {
        const p = li.querySelector('p');
        if (p && p.textContent?.trim() === '') {
          li.parentNode?.removeChild(li);
          hasChanges = true;
        }
      });

      // If we made changes, update the editor content
      if (hasChanges) {
        editor.commands.setContent(doc.body.innerHTML);
      }

      // Call onChange with the final HTML
      onChange?.(editor.getHTML());
    },
  })

  //   editor?.commands.setContent("")

  const onImageSelect = (image: string) => {
    editor
      ?.chain()
      .focus()
      .setImage({ src: image, alt: 'this is an image' })
      .run()
  }

  return (
    <>
      <div className="flex flex-col space-y-6 border border-gray-200 rounded-lg pb-4">
        <div className="bg-gray-100 p-4 z-50 rounded-lg">
          <Tools editor={editor} />
        </div>
        <div className="flex-1 px-4">
          <EditorContent
            editor={editor}
            className="h-full editor-content"
            // extensions={[StarterKit]}
            // content="<h1>Hello world <strong>How are you?</strong></h1>"
          />
        </div>
      </div>
    </>
  )
}

export default RichEditor
