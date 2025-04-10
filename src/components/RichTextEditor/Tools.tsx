import { ChangeEvent, ChangeEventHandler, FC, useState, useEffect, useRef } from 'react'
import {
  BiAlignLeft,
  BiAlignMiddle,
  BiAlignRight,
  BiBold,
  BiCodeAlt,
  BiCodeCurly,
  BiImageAlt,
  BiItalic,
  BiListOl,
  BiListUl,
  BiStrikethrough,
  BiUnderline,
} from 'react-icons/bi'
import ToolButton from './ToolButton'
import { BubbleMenu, ChainedCommands, Editor } from '@tiptap/react'
import LinkForm from './LinkForm'
import LinkEditForm from './LinkEditForm'
import { uploadImage } from '@/actions/upload.action'

interface Props {
  editor: Editor | null
  onImageSelection?(): void
}

const tools = [
  {
    task: 'bold',
    icon: <BiBold size={20} />,
  },
  {
    task: 'italic',
    icon: <BiItalic size={20} />,
  },
  {
    task: 'underline',
    icon: <BiUnderline size={20} />,
  },
  {
    task: 'strike',
    icon: <BiStrikethrough size={20} />,
  },
  {
    task: 'code',
    icon: <BiCodeAlt size={20} />,
  },
  {
    task: 'codeBlock',
    icon: <BiCodeCurly size={20} />,
  },
  {
    task: 'left',
    icon: <BiAlignLeft size={20} />,
  },
  {
    task: 'center',
    icon: <BiAlignMiddle size={20} />,
  },
  {
    task: 'right',
    icon: <BiAlignRight size={20} />,
  },
  {
    task: 'bulletList',
    icon: <BiListUl size={20} />,
  },
  // {
  //   task: 'orderedList',
  //   icon: <BiListOl size={20} />,
  // },
  {
    task: 'image',
    icon: <BiImageAlt size={20} />,
  },
] as const

const headingOptions = [
  { task: 'p', value: 'Paragraph' },
  { task: 'h1', value: 'Heading 1' },
  { task: 'h2', value: 'Heading 2' },
  { task: 'h3', value: 'Heading 3' },
] as const

const chainMethods = (
  editor: Editor | null,
  command: (chain: ChainedCommands) => ChainedCommands,
) => {
  if (!editor) return

  command(editor.chain().focus()).run()
}

type TaskType = (typeof tools)[number]['task']
type HeadingType = (typeof headingOptions)[number]['task']
const Tools: FC<Props> = ({ editor, onImageSelection }) => {
  const [isSticky, setIsSticky] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this value (200) to change when the toolbar becomes sticky
      const shouldBeSticky = window.scrollY > 600;
      setIsSticky(shouldBeSticky);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOnClick = (task: TaskType) => {
    switch (task) {
      case 'bold':
        return chainMethods(editor, (chain) => chain.toggleBold())
      case 'italic':
        return chainMethods(editor, (chain) => chain.toggleItalic())
      case 'underline':
        return chainMethods(editor, (chain) => chain.toggleUnderline())
      case 'strike':
        return chainMethods(editor, (chain) => chain.toggleStrike())
      case 'code':
        return chainMethods(editor, (chain) => chain.toggleCode())
      case 'codeBlock':
        return chainMethods(editor, (chain) => chain.toggleCodeBlock())
      // case 'orderedList':
      //   return chainMethods(editor, (chain) => chain.toggleOrderedList())
      case 'bulletList':
        return chainMethods(editor, (chain) => chain.toggleBulletList())
      case 'left':
        return chainMethods(editor, (chain) => chain.setTextAlign('left'))
      case 'center':
        return chainMethods(editor, (chain) => chain.setTextAlign('center'))
      case 'right':
        return chainMethods(editor, (chain) => chain.setTextAlign('right'))
    }
  }
  const handleImageSelection = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const formData = new FormData()
      formData.append('image', file)
      const result = await uploadImage(formData)
      if (result.filePath) {
        editor
          ?.chain()
          .focus()
          .setImage({ src: result.filePath, alt: 'this is an image' })
          .run()
      }

  
    } catch (error) {
      console.error('Error uploading image:', error)
    }finally{
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }

  const handleLinkSubmission = (href: string) => {
    // empty
    if (href === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run()

      return
    }

    // update link
    editor?.chain().focus().extendMarkRange('link').setLink({ href }).run()
  }

  const handleHeadingSelection: ChangeEventHandler<HTMLSelectElement> = ({
    target,
  }) => {
    const { value } = target as { value: HeadingType }

    switch (value) {
      case 'p':
        return chainMethods(editor, (chain) => chain.setParagraph())
      case 'h1':
        return chainMethods(editor, (chain) =>
          chain.toggleHeading({ level: 1 }),
        )
      case 'h2':
        return chainMethods(editor, (chain) =>
          chain.toggleHeading({ level: 2 }),
        )
      case 'h3':
        return chainMethods(editor, (chain) =>
          chain.toggleHeading({ level: 3 }),
        )
    }
  }

  const getInitialLink = () => {
    const attributes = editor?.getAttributes('link')

    if (attributes) return attributes.href
  }

  const getSelectedHeading = (): HeadingType => {
    let result: HeadingType = 'p'

    if (editor?.isActive('heading', { level: 1 })) result = 'h1'
    if (editor?.isActive('heading', { level: 2 })) result = 'h2'
    if (editor?.isActive('heading', { level: 3 })) result = 'h3'

    return result
  }

  return (
    <div 
      className={`space-x-1 ${
        isSticky 
          ? 'fixed top-[150px] max-w-[100px] left-0 right-0 bg-white z-[9999999] px-2 py-8 shadow-md' 
          : 'flex'
      }`}
    >
      <select
        value={getSelectedHeading()}
        className={`${isSticky ? "text-[10px] p-1 w-[80px]" : "p-2"}`}
        onChange={handleHeadingSelection}
      >
        {headingOptions.map((item) => {
          return (
            <option key={item.task} value={item.task}>
              {item.value}
            </option>
          )
        })}
      </select>

      <LinkForm onSubmit={handleLinkSubmission} />

      <BubbleMenu
        editor={editor}
        shouldShow={({ editor }) => editor.isActive('link')}
      >
        <LinkEditForm
          initialState={getInitialLink()}
          onSubmit={handleLinkSubmission}
        />
        {/* <div className="bg-white w-96 p-2 rounded shadow-md z-50">
        </div> */}
      </BubbleMenu>
      <div className="flex flex-wrap gap-2">
        {tools.map(({ icon, task }) => {
          return (
            <ToolButton
              key={task}
              onClick={() => {
                handleOnClick(task)
              }}
              active={
                editor?.isActive(task) || editor?.isActive({ textAlign: task })
              }
            >
              {task === 'image' ? (
                <label htmlFor="rich-text-editor-image">
                  <input
                  ref={inputRef}
                    onChange={handleImageSelection}
                    id="rich-text-editor-image"
                    type="file"
                    hidden
                  />
                  {icon}
                </label>
              ) : (
                icon
              )}
            </ToolButton>
          )
        })}
      </div>
    </div>
  )
}

export default Tools
