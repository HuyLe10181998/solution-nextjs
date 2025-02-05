'use client'
import { useEffect, useState } from 'react'
import FormItem from './ui/form-item'
import FormItemUpload from './ui/form-item-upload'
import toast from 'react-hot-toast'
import { updateTestimonial } from '@/actions/home.action'
import { TestimonialData, UserComment } from '@/models/common.model'
import Testimonial from './Testimonial'

function TestimonialForm({
  testimonialData,
}: {
  testimonialData: TestimonialData
}) {
  const [users, setUsers] = useState<UserComment[]>(
    testimonialData?.users || [],
  )
  const [preview, setPreview] = useState<boolean>(false)
  const onChange = (e: any, id: number | string, name: string) => {
    setUsers((prev) => {
      const newUsers = [...prev]
      newUsers.forEach((user) => {
        if (user.id === id) {
          ;(user as any)[name] = e?.target?.value || e
        }
      })
      return newUsers
    })
  }

  const checkUser = () => {
    return users.every((user) => {
      return (
        typeof user.job === 'string' &&
        typeof user.text === 'string' &&
        typeof user.avatar === 'string'
      )
    })
  }

  const handleAddUser = () => {
    setUsers((prev) => {
      return [
        ...prev,
        {
          avatar: '',
          name: '',
          job: '',
          text: '',
          date: new Date(),
          id: Date.now().toString(),
        } as UserComment,
      ]
    })
  }
  const handleRemoveUser = (id: number | string) => {
    setUsers((prev) => {
      return prev.filter((user) => user.id !== id)
    })
  }
  const handleSaveAll = async () => {
    if (!checkUser()) {
      toast.error('Please fill all the fields')
      return
    }
    const res = await updateTestimonial({ ...testimonialData, users })
    if ('error' in res) {
      toast.error(res.error || 'Something went wrong')
    } else {
      toast.success('Testimonial section updated successfully')
    }
  }

  return (
    <div className={`${!preview && 'text-center'}`}>
      <div className="flex gap-8 justify-center items-center mb-8">
        <h3 className="text-2xl font-bold">Testimonial Config</h3>

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
        <div className="max-w-[100vw] bg-white rounded-lg p-4">
          <Testimonial data={testimonialData} />
        </div>
      ) : (
        <>
          {users?.map((user, index) => {
            return (
              <div className="relative mt-6 max-w-[900px] mb-8 inline-block text-primary-text w-full rounded-xl !bg-white p-8 shadow lg:mt-0 md:text-center text-left">
                <h2 className="break-normal pb-8 font-sans text-xl font-bold text-gray-700 text-center">
                  User {index + 1}
                </h2>
                <FormItemUpload
                  id={user.id}
                  label="Avatar:"
                  name="image"
                  value={user.avatar}
                  onChange={(e) => {
                    onChange(e, user.id, 'image')
                  }}
                />
                <FormItem
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Type name"
                  value={user.name}
                  onChange={(e) => {
                    onChange(e, user.id, 'name')
                  }}
                />
                <FormItem
                  label="Job"
                  name="job"
                  type="text"
                  placeholder="Type job"
                  value={user.job}
                  onChange={(e) => {
                    onChange(e, user.id, 'job')
                  }}
                />
                <FormItem
                  label="Text"
                  name="text"
                  type="text"
                  placeholder="Type text"
                  value={user.text}
                  onChange={(e) => {
                    onChange(e, user.id, 'text')
                  }}
                />
                <FormItem
                  label="Date"
                  name="date"
                  type="date"
                  placeholder="Type date"
                  value={new Date(user.date as string)}
                  onChange={(e) => {
                    onChange(e, user.id, 'date')
                  }}
                />

                <button
                  type="button"
                  className="mt-4 rounded bg-red-500 px-4 py-1 text-white"
                  onClick={() => handleRemoveUser(user.id)}
                >
                  Remove User
                </button>
              </div>
            )
          })}

          <div className="flex gap-4 items-center justify-center">
            <button
              type="button"
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
              onClick={handleAddUser}
            >
              Add User
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

export default TestimonialForm
