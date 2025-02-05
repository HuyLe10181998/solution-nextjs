'use client'
import { HeroData, HeroSlide } from '@/models/common.model'
import { useState } from 'react'
import FormItem from './ui/form-item'
import FormItemUpload from './ui/form-item-upload'
import toast from 'react-hot-toast'
import { updateHero } from '@/actions/home.action'
import Hero from './Hero'

function HeroForm({ heroData }: { heroData: HeroSlide[] }) {
  const [slides, setSlides] = useState<HeroSlide[]>(heroData)
  const [preview, setPreview] = useState<boolean>(false)
  const onChange = (e: any, id: number | string, name: string) => {
    setSlides((prev) => {
      const newSlides = [...prev]
      newSlides.forEach((slide) => {
        if (slide.id === id) {
          ;(slide as any)[name] = e?.target?.value || e
        }
      })
      return newSlides
    })
  }

  const checkSlide = () => {
    return slides.every((slide) => {
      return slide.background && slide.tag && slide.title && slide.description
    })
  }

  const handleAddSlide = () => {
    setSlides((prev) => {
      return [
        ...prev,
        {
          background: '',
          tag: '',
          title: '',
          description: '',
          btnLink: '',
          btnText: '',
          id: Date.now().toString(),
        } as HeroSlide,
      ]
    })
  }
  const handleRemoveSlide = (id: number | string) => {
    setSlides((prev) => {
      return prev.filter((slide) => slide.id !== id)
    })
  }
  const handleSaveAll = async () => {
    if (!checkSlide()) {
      toast.error('Please fill all the fields')
      return
    }
    const res = await updateHero(slides)
    if ('error' in res) {
      toast.error(res.error || 'Something went wrong')
    } else {
      toast.success('Hero section updated successfully')
    }
  }
  return (
    <div className={`${!preview && 'text-center'}`}>
      <div className="flex gap-8 justify-center items-center mb-8">
        <h3 className="text-2xl font-bold">Hero Config</h3>

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
        <div className="max-w-[100vw] p-8 rounded-lg">
          <Hero data={slides} />
        </div>
      ) : (
        <>
          {slides?.map((slide, index) => {
            return (
              <div className="relative mt-6 max-w-[900px] mb-8 inline-block text-primary-text w-full rounded-xl !bg-white p-8 shadow lg:mt-0 md:text-center text-left">
                <h2 className="break-normal pb-8 font-sans text-xl font-bold text-gray-700 text-center">
                  Slide {index + 1}
                </h2>
                <FormItemUpload
                  id={slide.id}
                  label="Background URL(1920x800):"
                  name="background"
                  value={slide.background}
                  onChange={(e) => {
                    console.log('slide', slide)
                    onChange(e, slide.id, 'background')
                  }}
                />
                <FormItem
                  label="Tag"
                  name="tag"
                  type="text"
                  placeholder="Type tag"
                  value={slide.tag}
                  onChange={(e) => {
                    onChange(e, slide.id, 'tag')
                  }}
                />
                <FormItem
                  label="Title"
                  name="title"
                  type="text"
                  placeholder="Type title"
                  value={slide.title}
                  onChange={(e) => {
                    onChange(e, slide.id, 'title')
                  }}
                />
                <FormItem
                  label="Description"
                  name="description"
                  type="textarea"
                  placeholder="Type description"
                  value={slide.description}
                  onChange={(e) => {
                    onChange(e, slide.id, 'description')
                  }}
                />
                <FormItem
                  label="Button Link"
                  name="btnLink"
                  type="text"
                  placeholder="Type button link"
                  value={slide.btnLink}
                  onChange={(e) => {
                    onChange(e, slide.id, 'btnLink')
                  }}
                />
                <FormItem
                  label="Button Text"
                  name="btnText"
                  type="text"
                  placeholder="Type button text"
                  value={slide.btnText}
                  onChange={(e) => {
                    onChange(e, slide.id, 'btnText')
                  }}
                />

                <button
                  type="button"
                  className="mt-4 rounded bg-red-500 px-4 py-1 text-white"
                  onClick={() => handleRemoveSlide(slide.id)}
                >
                  Remove Slide
                </button>
              </div>
            )
          })}

          <div className="flex gap-4 items-center justify-center">
            <button
              type="button"
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
              onClick={handleAddSlide}
            >
              Add Slide
            </button>
            <button
              type="button"
              className="mt-4 rounded bg-green-500 px-4 py-2 text-white"
              onClick={handleSaveAll}
            >
              Save All
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default HeroForm
