import { Button } from './ui/button'
import { Dialog, DialogTitle, DialogDescription } from './ui/dialog'

function ConfirmDialog({
  title,
  description,
  onConfirm,
  onCancel,
}: {
  title: string
  description: string
  onConfirm: () => void
  onCancel: () => void
}) {
  return (
    <Dialog>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
      <div className="flex items-center gap-3">
        <Button color="gray">Cancel</Button>
        <Button>Save</Button>
      </div>
    </Dialog>
  )
}

export default ConfirmDialog
