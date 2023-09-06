"use client"
import FormThankYou from "@/components/formThankYou"
import PageWithHeader from "@/components/pageWithHeader"
import { FormEvent, useState } from "react"
import useWeb3Forms from "@web3forms/react"
import FormLoadingSkeleton from "@/components/formLoadingSkeleton"

type CurrentState = "initial" | "loading" | "success" | "error"

const Contact = () => {
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
    <PageWithHeader headerText="Let's connect">
      {currentState === "initial" && (
        <div className="mx-auto px-4 md:px-0 max-w-3xl mb-5">
          <p className="leading-8 text-center mx-auto mb-6">
            If you&apos;re looking for a dedicated developer to bring your
            project to life, or if you have any questions about my work,
            don&apos;t hesitate to reach out. I&apos;m always open to new
            opportunities and collaborations. Let&apos;s discuss how I can be an
            asset to your team!
          </p>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 p-2 w-full border rounded-md bg-slate-50 focus:border-blue-500 transition duration-150"
                />
              </div>
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
                  className="mt-1 p-2 w-full border rounded-md bg-slate-50 focus:border-blue-500 transition duration-150"
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
                  className="mt-1 p-2 w-full border-2 bg-slate-50 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-150"
                ></textarea>
              </div>
              <input
                type="hidden"
                name="redirect"
                value="https://martinweber.dev/thank-you"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 hover:from-blue-400 hover:via-indigo-500 hover:to-purple-600 text-white font-semibold p-2 rounded-md mx-auto w-full transition duration-300"
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
    </PageWithHeader>
  )
}

export default Contact
