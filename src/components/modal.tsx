import React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <div className="fixed inset-0 flex items-center justify-center">
      <DialogPrimitive.Overlay className="fixed inset-0 backdrop-blur" />
      <DialogPrimitive.Content
        {...props}
        ref={forwardedRef}
        className="m-auto p-8 z-10 bg-white rounded-lg max-w-[80vw] max-h-[90vh]"
      >
        {children}
      </DialogPrimitive.Content>
    </div>
  </DialogPrimitive.Portal>
))

DialogContent.displayName = "DialogContent"

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
