'use client'
import { ChangeEventHandler, useState } from 'react'
import { Input } from './input'
import { uploadImage } from '@/actions/upload.action'

interface FormItemUploadProps {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  name: string
  label: string
  id?: string | number
}
function FormItemUpload({
  value,
  onChange,
  name,
  label,
  id = 1,
}: FormItemUploadProps) {
  const [imageUrl, setImageUrl] = useState(value)

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      const formData = new FormData()
      formData.append('image', file)
      const result = await uploadImage(formData)
      if (result.filePath) {
        setImageUrl(result.filePath)
        onChange(result.filePath)
      }
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }
  return (
    <div className="mb-4 w-full items-center md:flex md:gap-0 gap-4">
      <label
        className="md:text-[15px] leading-5 text-xs pr-4 mb-2 md:mb-0 font-bold text-gray-600 md:flex-1 md:text-left"
        htmlFor={`upload-${id}`}
      >
        {label}
      </label>
      <div className="flex w-full gap-2 md:w-[77%] items-center">
        <Input
          onChange={onChange}
          name={name}
          className="!text-primary-text w-full"
          value={imageUrl}
          readOnly
          type="text"
          placeholder="https://placehold.co/315x340"
        />
        <label
          className="group relative inline-block cursor-pointer px-2 py-2 md:px-4 md:py-2 font-medium"
          htmlFor={`upload-${id}`}
        >
          <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0" />
          <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black" />
          <span className="relative text-xs md:text-[16px] text-black group-hover:text-white">
            Upload
          </span>
        </label>
        <input
          className="hidden rounded-md p-2"
          type="file"
          accept="image/*"
          id={`upload-${id}`}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default FormItemUpload
