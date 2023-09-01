import ArrowLink from "@/components/arrowLink"

export default function Home() {
  return (
    <main>
      <div className="mb-8">
        <p className="leading-8 text-center mx-auto max-w-2xl mb-8">
          I&apos;m a passionate front-end developer with a flair for crafting
          visually captivating web applications. While <strong>React</strong>{" "}
          and <strong>TypeScript</strong> have been my go-to tools, I&apos;m
          open to exploring other frameworks and languages, always eager to
          expand my horizons. Beyond the front-end, I&apos;ve ventured into
          backend development, both in personal projects and professional
          settings. I believe in the dynamic nature of technology and am always
          geared up to embrace and adapt to its ever-evolving landscape. Whether
          it&apos;s mastering a new framework or diving into a different
          language, I&apos;m up for the challenge.
        </p>
      </div>

      <div className="mb-8 text-center">
        <p className="text-lg">
          Let&apos;s create something{" "}
          <strong className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 inline-block text-transparent bg-clip-text">
            extraordinary
          </strong>{" "}
          together.
        </p>
      </div>

      <div className="bg-gray-50 p-6 flex flex-col justify-center text-xl mt-10 space-y-4">
        <ArrowLink href="/projects">check out my work</ArrowLink>
        <ArrowLink href="/my-journey">work experience</ArrowLink>
        <ArrowLink href="/contact">let&apos;s talk</ArrowLink>
      </div>
    </main>
  )
}
