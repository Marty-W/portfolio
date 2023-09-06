import PageWithHeader from "@/components/pageWithHeader"

const MyJourney = () => {
  return (
    <PageWithHeader headerText="My Coding Journey">
      <div className="container mx-auto px-4 md:px-0 max-w-3xl mb-5">
        <p className="leading-8 text-center mx-auto">
          My journey into the world of development began in 2019. The thrill of
          turning intricate problems into sleek web applications captivated me.
          My first significant role was at <strong>Socialbakers</strong> (now
          Emplify) in 2020. Here, I faced the challenges of building a
          comprehensive social media management platform, managing vast amounts
          of data in a user-friendly manner.
        </p>
        <p className="leading-8 mt-6 text-center mx-auto">
          In 2022, the path led me to <strong>01People</strong>. I contributed
          to a health-focused project, building an app that bridged the
          communication gap between users and their doctors. This shift in scope
          was incredibly rewarding. During this time, I also ventured into React
          Native, expanding the app&apos;s reach across multiple platforms.
        </p>
        <p className="leading-8 mt-6 text-center mx-auto">
          After a six-month personal hiatus, my passion for tech remains
          undiminished. With a diverse skill set and renewed tenacity, I&apos;m
          not just ready to jump back in - I&apos;m ready to make a real
          difference.
        </p>
        <p className="mt-8 text-lg text-center">
          I believe every experience, every project, and every challenge faced
          is a step forward. And I&apos;m excited for what&apos;s next on this
          journey.
        </p>
      </div>
    </PageWithHeader>
  )
}

export default MyJourney
