'use client'
import { updateDataInfo } from '@/actions/info.action'
import { FormEvent, useState } from 'react'
import FormItem from './ui/form-item'
import toast from 'react-hot-toast'
import SpinLoading from './ui/spin-loading'
import ButtonSave from './ui/button-save'
import { SheetData } from '@/models/common.model'
import { updateSheetInfo } from '@/actions/auth.action'
function SheetForm({ sheetData }: { sheetData: SheetData }) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setIsLoading(true)
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const result = await updateSheetInfo(data)
      if (result.error) {
        console.error('Error updating:', result.error)
        toast.error(result.error || 'Something went wrong')
        // Handle error (you may want to show an error message to the user)
      } else {
        toast.success('Updated successfully')
      }
    } catch (error) {
      console.error('Failed to update data', error)
      toast.error('Failed to update data')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mt-6 max-w-[900px] inline-block text-primary-text w-full rounded-xl !bg-white p-8 shadow lg:mt-0 md:text-center text-left"
    >
      {isLoading && <SpinLoading />}
      <h2 className="break-normal pb-8 font-sans text-xl font-bold text-gray-700 text-center">
        Google Sheet Config
      </h2>
      <FormItem
        label="Sheet User Name"
        name="sheetUserName"
        type="text"
        placeholder="Type sheet name"
        value={sheetData.sheetUserName}
        onChange={() => {}}
      />
            <FormItem
        label="Sheet Job Name"
        name="sheetJobName"
        type="text"
        placeholder="Type sheet name"
        value={sheetData.sheetJobName}
        onChange={() => {}}
      />

      <FormItem
        label="Sheet Id"
        name="sheetId"
        type="text"
        placeholder="Type sheet id"
        value={sheetData.sheetId}
        onChange={() => {}}
      />

      <FormItem
        label="Range"
        name="range"
        type="text"
        placeholder="Type range"
        value={sheetData.range}
        onChange={() => {}}
      />

   

      <ButtonSave />
    </form>
  )
}

export default SheetForm
