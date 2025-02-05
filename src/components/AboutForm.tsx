'use client'
import { updateDataInfo } from '@/actions/info.action'
// import { updateHeaderData } from "@/actions/info.action"
import { FormEvent, useState } from 'react'
import { AboutData } from '@/models/common.model'
import FormItem from './ui/form-item'
import toast from 'react-hot-toast'
import SpinLoading from './ui/spin-loading'
import ButtonSave from './ui/button-save'
import FormItemUpload from './ui/form-item-upload'
import { updateAbout } from '@/actions/home.action'
import About from './About'

function AboutForm({ aboutForm }: { aboutForm: AboutData }) {
  const [isLoading, setIsLoading] = useState(false)
  const [preview, setPreview] = useState<boolean>(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const result = await updateAbout({ ...aboutForm, ...data })
      if (result.error) {
        console.error('Error updating:', result.error)
        toast.error(result.error || 'Something went wrong')
        // Handle error (you may want to show an error message to the user)
      } else {
        toast.success('About data updated successfully')
      }
    } catch (error) {
      console.error('Failed to update data', error)
      toast.error('Failed to update data')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center gap-8 items-center p-8">
      <div className="flex gap-4 items-center">
        <h2 className="break-normal font-sans text-xl font-bold text-gray-700 text-center">
          About Config
        </h2>
        <div
          onClick={() => setPreview(!preview)}
          className="relative text-center cursor-pointer px-4 py-2  md:px-6 md:py-3 font-bold text-black group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>{' '}
          <span className="absolute inset-0 w-full h-full border-4 border-black"></span>{' '}
          <span className="relative text-xs md:text-[18px]">
            {preview ? 'Turn off preview' : 'Preview'}
          </span>
        </div>
      </div>

      {preview ? (
        <div className="max-w-[100vw] p-8 rounded-lg bg-white">
          <About data={aboutForm} />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="relative mt-6 max-w-[900px] inline-block text-primary-text w-full rounded-xl !bg-white p-8 shadow lg:mt-0 md:text-center text-left"
        >
          {isLoading && <SpinLoading />}

          <FormItemUpload
            label="Large Image URL(437x530):"
            name="imgLarge"
            value={aboutForm.imgLarge}
            onChange={() => {}}
          />

          <FormItemUpload
            label="Small Image URL(269x277):"
            name="img"
            value={aboutForm.img}
            onChange={() => {}}
          />
          <FormItemUpload
            label="CEO Avatar URL(68x68):"
            name="avatarCeo"
            value={aboutForm.avatarCeo}
            onChange={() => {}}
          />

          <FormItem
            label="Title"
            name="title"
            type="text"
            placeholder="Ex: Về Chúng Tôi"
            value={aboutForm.title}
            onChange={() => {}}
          />

          <FormItem
            label="Description"
            name="description"
            type="text"
            placeholder="Type description here"
            value={aboutForm.description}
            onChange={() => {}}
          />

          <ButtonSave />
        </form>
      )}
    </div>
  )
}

export default AboutForm
