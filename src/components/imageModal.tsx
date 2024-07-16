import * as Dialog from "@radix-ui/react-dialog"

interface Props {
  open: boolean
  closeDialog: () => void
  src: string
  alt: string
}

export default ({ open, src, alt, closeDialog }: Props) => {
  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-full w-full bg-neutral-700 opacity-95" />
        <Dialog.Content
          className="fixed left-1/2  top-1/2 max-h-[74vh] max-w-[400px] -translate-x-1/2 -translate-y-1/2 transform rounded-sm bg-neutral-100 p-4 shadow-lg"
          onInteractOutside={closeDialog}
        >
          <img src={src} alt={alt} />
          <Dialog.Title />
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
