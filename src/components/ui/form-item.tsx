import { Input } from './input'
import { Datepicker } from 'flowbite-react'
interface FormItemProps {
  label: string
  name: string
  type: string
  placeholder: string
  value: string | number | Date | boolean
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | Date | null,
  ) => void
}

function FormItem({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: FormItemProps) {
  const InputComponent = (() => {
    if (type === 'textarea') {
      return (
        <textarea
          className="w-full h-24 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm !text-primary-text"
          placeholder={placeholder}
          name={name}
          defaultValue={value as string}
          onChange={onChange}
        />
      )
    }
    if (type === 'date') {
      return (
        <Datepicker
          defaultValue={value ? new Date(value as string) : new Date()}
          className="input-date flex-1 z-[999]"
          name={name}
          onChange={(date) => {
            onChange(date)
          }}
        />
      )
    }
    if (type === 'checkbox') {
      return (
        <input type="checkbox" className='focus:text-primary-text' name={name} defaultChecked={value as boolean} onChange={onChange} />
      )
    }
    return (
      <Input
        className="!text-primary-text"
        type={type}
        placeholder={placeholder}
        name={name}
        defaultValue={value as string}
        onChange={onChange}
      />
    )
  })()
  return (
    <>
      <div className="mb-8 items-center md:flex md:gap-0 gap-4">
        <label
          htmlFor={name}
          className={`pr-4 mb-2 md:mb-0 md:text-[16px] text-xs font-bold text-gray-600 ${type === 'date' || type ==="checkbox" ? 'w-[23%]' : 'w-[30%]'} md:text-left`}
        >
          {label}
        </label>
        {InputComponent}
      </div>
    </>
  )
}

export default FormItem
