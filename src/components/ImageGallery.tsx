'use client'
import { FC, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FileUploader } from 'react-drag-drop-files'
import { IoCloudUploadOutline } from 'react-icons/io5'
import GalleryImage from './GalleryImage'
import { useImages } from '@/context/ImageProvider'
import { uploadImage } from '@/actions/upload.action'

interface Props {
  visible: boolean
  onClose(state: boolean): void
  onSelect?(src: string): void
}

const ImageGallery: FC<Props> = ({ visible, onSelect, onClose }) => {
  const [isUploading, setIsUploading] = useState(false)
  const image = useImages()
  const images = image?.images
  const updateImages = image?.updateImages
  const removeOldImage = image?.removeOldImage

  const handleClose = () => {
    onClose(!visible)
  }

  const handleSelection = (image: string) => {
    onSelect && onSelect(image)
    handleClose()
  }

  if (!visible) return null

  return (
    <div
      tabIndex={-1}
      onKeyDown={({ key }) => {
        if (key === 'Escape') handleClose()
      }}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="relative md:w-[760px] w-[80%] h-[80%] bg-white rounded-md p-4 overflow-y-auto">
        <div className="absolute right-4 top-4 p-2 z-50">
          <button onClick={handleClose}>
            <IoMdClose size={24} />
          </button>
        </div>
        <FileUploader
          handleChange={async (file: File) => {
            setIsUploading(true)
            try {
              const formData = new FormData()
              formData.append('image', file)
              const res = await uploadImage(formData)
              if (res && updateImages) {
                updateImages([res.filePath])
              }
            } catch (error) {
              console.log(error)
            }

            setIsUploading(false)
          }}
          name="file"
          types={['png', 'jpg', 'jpeg', 'webp']}
        >
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <IoCloudUploadOutline size={30} className="text-gray-500" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Image file
                </p>
              </div>
            </label>
          </div>
        </FileUploader>

        {!images?.length ? (
          <p className="p-4 text-center text-2xl font-semibold opacity-45">
            No Images to Render...
          </p>
        ) : null}

        <div className="grid gap-4 md:grid-cols-4 grid-cols-2 mt-4">
          {isUploading && (
            <div className="w-full aspect-square rounded animate-pulse bg-gray-200"></div>
          )}
          {images?.map((item) => {
            return (
              <GalleryImage
                key={item}
                onSelectClick={() => handleSelection(item)}
                onDeleteClick={async () => {
                  if (confirm('Are you sure?')) {
                    const id = item.split('/').slice(-2).join('/').split('.')[0]
                    // await removeImage(id);
                    if (removeOldImage) {
                      removeOldImage(item)
                    }
                  }
                }}
                src={item}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
