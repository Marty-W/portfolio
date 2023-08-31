import { PropsWithChildren } from "react"

interface Props {
  headerText: string
}

const PageWithHeader = ({ children, headerText }: PropsWithChildren<Props>) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl mb-6 text-center">{headerText}</h2>
      {children}
    </div>
  )
}

export default PageWithHeader
