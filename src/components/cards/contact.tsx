import { type FormEvent, useState } from "react"
import useWeb3Forms from "@web3forms/react"

type CurrentState = "initial" | "loading" | "success" | "error"

export const Contact = () => {
  const [currentState, setCurrentState] = useState<CurrentState>("initial")
  const [message, setMessage] = useState("")

  const apiKey = "d94f227c-efc1-48f4-9a69-4277be6fc8b6"

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      subject: "New Contact Message from Portfolio",
    },
    onSuccess: () => {
      setCurrentState("success")
    },
    onError: (msg) => {
      setCurrentState("error")
      setMessage(msg)
    },
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setCurrentState("loading")
    const formData = new FormData(event.currentTarget)
    const { name, email, message } = Object.fromEntries(formData.entries())

    onSubmit({
      name,
      email,
      message,
    })
  }

  return (
    <div id="contact">
      {currentState === "initial" && (
        <div className="mx-auto mb-5 max-w-3xl px-4 md:px-0">
          <p className="mx-auto mb-6 text-center leading-8">
            If you&apos;re looking for a dedicated developer to bring your
            project to life, or if you have any questions about my work,
            don&apos;t hesitate to reach out. I&apos;m always open to new
            opportunities and collaborations.
          </p>
          <p className="text-center">
            Let&apos;s discuss how I can be an asset to your team!
          </p>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-md border bg-slate-50 p-2 transition duration-150 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-md border-2 border-gray-300 bg-slate-50 p-2 transition duration-150 focus:border-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <input
                type="hidden"
                name="redirect"
                value="https://martinweber.dev/thank-you"
              />
              <button
                type="submit"
                className="mx-auto w-full rounded-md bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-[size:_200%] bg-[position:_0%_0%] p-2 font-semibold text-white transition-all duration-500 hover:from-blue-400 hover:via-indigo-500 hover:to-purple-600 hover:bg-[position:_100%_100%]"
              >
                Submit
              </button>
            </form>
          </div>
          {message && <p>{message}</p>}
        </div>
      )}
      {currentState === "loading" && <FormLoadingSkeleton />}
      {currentState === "success" && <FormThankYou />}
    </div>
  )
}

const FormLoadingSkeleton = () => {
  return (
    <div className="container mx-auto mb-5 max-w-3xl animate-pulse space-y-3 px-4 md:px-0">
      <div className="h-6 rounded-lg bg-slate-200" />
      <div className="h-6 rounded-lg bg-slate-200" />
      <div className="h-6 rounded-lg bg-slate-200" />
      <div className="mx-auto h-3 w-1/3 rounded-lg bg-slate-200" />
    </div>
  )
}

const FormThankYou = () => {
  return (
    <div className="container mx-auto mb-5 max-w-3xl px-4 md:px-0">
      <p className="mx-auto mb-6 text-center leading-8">
        I&apos;ve received your message and will get back to you as soon as
        possible. I appreciate your interest and look forward to potentially
        collaborating or discussing opportunities further.
      </p>
      <p className="text-center">Warm regards, Martin Weber</p>
    </div>
  )
}
