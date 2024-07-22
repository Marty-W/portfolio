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
        <Dialog.Overlay className="fixed inset-0 h-full w-full bg-neutral-700 transition-opacity duration-200 ease-in-out data-[state=closed]:opacity-0 data-[state=open]:opacity-95" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-10 flex h-[90vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-sm bg-neutral-100 p-4 shadow-lg"
          onInteractOutside={closeDialog}
          onEscapeKeyDown={closeDialog}
        >
          <Dialog.Close
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full text-neutral-800 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            onClick={closeDialog}
          >
            ✕
          </Dialog.Close>
          <div className="flex-grow overflow-auto">
            <img
              src={src}
              alt={alt}
              className="mx-auto max-h-full max-w-full object-contain"
            />
          </div>
          <Dialog.Description className="mt-2 text-center">
            <p>{alt}</p>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
