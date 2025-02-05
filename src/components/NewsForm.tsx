'use client'
import { FormEvent, useState } from 'react'
import FormItem from './ui/form-item'
import toast from 'react-hot-toast'
import SpinLoading from './ui/spin-loading'
import ButtonSave from './ui/button-save'
import { usePathname, useRouter } from 'next/navigation'
import { News } from '@/models/news.model'
import FormItemUpload from './ui/form-item-upload'
import RichTextEditor from './ui/rich-text-editor'
import { createNew, updateNew } from '@/actions/news.action'

function NewsForm({ news }: { news?: News }) {
  const [isLoading, setIsLoading] = useState(false)
  const [editorContent, setEditorContent] = useState(news?.content || '')
  const pathName = usePathname()
  const router = useRouter()
  const isEdit = pathName.includes('edit')

  async function handleNews(e: FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    e.preventDefault()
    let result

    const formData = new FormData(e.currentTarget)
    formData.append('content', editorContent)
    const data = Object.fromEntries(formData.entries())


    try {
      if (isEdit) {
        if (!news?.id) {
          toast.error('News not found')
          return
        }
        result = await updateNew(news?.id, {...data,isPopular: data.isPopular === 'on' ? true : false})
      } else {
        result = await createNew({...data,isPopular: data.isPopular === 'on' ? true : false})
      }
      if (result.error) {
        console.error('Error:', result.error)
        toast.error(result.error || 'Something went wrong')
        // Handle error (you may want to show an error message to the user)
      } else {
        if (isEdit) {
          toast.success('News updated successfully')
        } else {
          toast.success('News created successfully')
          router.push('/admin/news')
        }
      }
    } catch (error) {
      console.error('Failed to create news', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleNews}
      className="relative mt-6 max-w-[900px] inline-block text-primary-text w-full rounded-xl !bg-white p-8 shadow lg:mt-0 md:text-center text-left"
    >
      {isLoading && <SpinLoading />}
      <h2 className="break-normal pb-8 font-sans text-xl font-bold text-gray-700 text-center">
        {isEdit ? 'Edit News' : 'Create News'}
      </h2>

      <FormItemUpload
        label="Thumb Image"
        name="thumb"
        value={news?.thumb || ''}
        onChange={() => {}}
      />
      <FormItem
        label="Title"
        name="title"
        type="text"
        placeholder="Type title here"
        value={news?.title || ''}
        onChange={() => {}}
      />

      <FormItem
        label="Description"
        name="description"
        type="text"
        placeholder="Type description here"
        value={news?.description || ''}
        onChange={() => {}}
      />

      <FormItem
        label="Author"
        name="author"
        type="text"
        placeholder="Type author here"
        value={news?.author || ''}
        onChange={() => {}}
      />

      <FormItem
        label="Date"
        name="date"
        type="date"
        placeholder="Type date here"
        value={news?.date ? new Date(news?.date) : new Date()}
        onChange={() => {}}
      />
        <FormItem
        label="Popularity"
        name="isPopular"
        type="checkbox"
        placeholder="Check popularity here"
        value={news?.isPopular as boolean}
        onChange={() => {}}
      />

      <RichTextEditor
        onChange={setEditorContent}
        initialContent={news?.content}
      />

      <ButtonSave />
    </form>
  )
}

export default NewsForm
